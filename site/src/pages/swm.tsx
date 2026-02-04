import Renderer from "@formbox/renderer";
import "@formbox/hs-theme/style.css";
import { theme } from "@formbox/hs-theme";
import { useEffect, useState } from "react";
import {
  SmartMessagingPhase,
  useSmartMessaging,
} from "sdc-smart-web-messaging-react";
import type { Questionnaire, QuestionnaireResponse } from "fhir/r5";

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
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        {phaseMessage}
      </div>
    );
  }

  if (!questionnaire || !Array.isArray(questionnaire.item)) {
    return null;
  }

  return (
    <div className="min-h-screen w-full">
      <Renderer
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        Loading smart messaging...
      </div>
    );
  }

  return <SwmClient />;
}
