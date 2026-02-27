import { styled } from "@linaria/react";
import { useStrings } from "@formbox/theme";

export type LoadingSpinnerProperties = {
  label?: string | undefined;
  showLabel?: boolean | undefined;
  size?: "sm" | "md" | undefined;
};

export function LoadingSpinner({
  label,
  showLabel = false,
  size = "sm",
}: LoadingSpinnerProperties) {
  const strings = useStrings();
  const resolvedLabel = label ?? strings.selection.loadingOptions;

  return (
    <SpinnerWrapper role="status" aria-live="polite">
      <SpinnerIcon aria-hidden="true" data-size={size} />
      {showLabel ? (
        <SpinnerText>{resolvedLabel}</SpinnerText>
      ) : (
        <VisuallyHidden>{resolvedLabel}</VisuallyHidden>
      )}
    </SpinnerWrapper>
  );
}

const SpinnerWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
`;

const SpinnerIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  border: 2px solid #cbd5e0;
  border-top-color: #3182ce;
  animation: spin 0.7s linear infinite;

  &[data-size="md"] {
    width: 0.9rem;
    height: 0.9rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerText = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
