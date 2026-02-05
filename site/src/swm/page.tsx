import type {
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/renderer";
import Renderer from "@formbox/renderer";
import "@formbox/hs-theme/style.css";
import { theme } from "@formbox/hs-theme";
import { useSyncExternalStore } from "react";
import {
  SmartMessagingPhase,
  useSmartMessaging,
} from "sdc-smart-web-messaging-react";
import "./style.css";

type Questionnaire = QuestionnaireOf<"r5">;
type QuestionnaireResponse = QuestionnaireResponseOf<"r5">;
const getPhaseMessage = (phase: SmartMessagingPhase) => {
  if (phase === SmartMessagingPhase.Disabled) {
    return "Missing SDC SWM parameters.";
  }
  if (phase === SmartMessagingPhase.AwaitingHandshake) {
    return "Waiting for handshake.";
  }
  if (phase === SmartMessagingPhase.AwaitingConfig) {
    return "Waiting for configuration.";
  }
  if (phase === SmartMessagingPhase.AwaitingContext) {
    return "Waiting for context.";
  }
  if (phase === SmartMessagingPhase.AwaitingQuestionnaire) {
    return "Waiting for questionnaire.";
  }
  return "";
};

const noop = () => {};

function subscribeToClient() {
  return noop;
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function SwmClient() {
  const {
    questionnaire,
    questionnaireResponse,
    config,
    phase,
    onQuestionnaireResponseChange,
  } = useSmartMessaging({
    application: {
      name: "Formbox Renderer",
      publisher: "Health Samurai",
    },
    capabilities: {
      extraction: false,
      focusChangeNotifications: false,
    },
  });

  const phaseMessage = getPhaseMessage(phase);
  if (phaseMessage) {
    return <div className="swm-status">{phaseMessage}</div>;
  }

  if (!questionnaire || !Array.isArray(questionnaire.item)) {
    return;
  }

  return (
    <div className="swm-page">
      <Renderer
        fhirVersion="r5"
        questionnaire={questionnaire as unknown as Questionnaire}
        initialResponse={
          questionnaireResponse as QuestionnaireResponse | undefined
        }
        onChange={
          onQuestionnaireResponseChange as (
            response: QuestionnaireResponse,
          ) => void
        }
        terminologyServerUrl={config?.terminologyServer}
        theme={theme}
      />
    </div>
  );
}

export default function SwmPage() {
  const isClient = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isClient) {
    return <div className="swm-status">Loading smart messaging...</div>;
  }

  return <SwmClient />;
}
