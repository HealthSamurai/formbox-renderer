import type {
  QuestionnaireOf,
  QuestionnaireResponseOf,
} from "@formbox/renderer";
import Renderer from "@formbox/renderer";
import "@formbox/hs-theme/style.css";
import { theme } from "@formbox/hs-theme";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  SmartMessagingPhase,
  useSmartMessaging,
} from "sdc-smart-web-messaging-react";
import "./style.css";

type Questionnaire = QuestionnaireOf<"r4">;
type QuestionnaireResponse = QuestionnaireResponseOf<"r4">;
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

  const lastQuestionnaireReference = useRef<Questionnaire | undefined>(
    undefined,
  );
  const lastSentResponseReference = useRef<QuestionnaireResponse | undefined>(
    undefined,
  );
  const [initialResponse, setInitialResponse] = useState<
    QuestionnaireResponse | undefined
  >(questionnaireResponse as QuestionnaireResponse | undefined);

  useEffect(() => {
    if (questionnaire !== lastQuestionnaireReference.current) {
      lastQuestionnaireReference.current = questionnaire as
        | Questionnaire
        | undefined;
      lastSentResponseReference.current = undefined;
    }

    if (questionnaireResponse === lastSentResponseReference.current) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInitialResponse(
      questionnaireResponse as QuestionnaireResponse | undefined,
    );
  }, [questionnaire, questionnaireResponse]);

  const handleChange = useCallback(
    (response: QuestionnaireResponse) => {
      if (response === lastSentResponseReference.current) {
        return;
      }
      lastSentResponseReference.current = response;
      onQuestionnaireResponseChange(response as QuestionnaireResponse);
    },
    [onQuestionnaireResponseChange],
  );

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
        fhirVersion="r4"
        questionnaire={questionnaire as unknown as Questionnaire}
        initialResponse={initialResponse}
        onChange={handleChange}
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
