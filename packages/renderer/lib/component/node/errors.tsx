/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import type { IssueSource } from "../../types.ts";
import { getIssueErrorId, getIssueMessage } from "../../utilities.ts";
import { useTheme } from "../../ui/theme.tsx";

function Errors({ id, messages }: { id: string; messages: string[] }) {
  const { Errors: ThemedErrors } = useTheme();
  return <ThemedErrors id={id} messages={messages} />;
}

export function renderErrors(source: IssueSource): ReactNode | undefined {
  const id = getIssueErrorId(source);
  if (!id) return;

  const messages = source.issues
    .map((issue) => getIssueMessage(issue))
    .filter((message): message is string => message !== undefined);
  if (messages.length === 0) return;

  return <Errors id={id} messages={messages} />;
}
