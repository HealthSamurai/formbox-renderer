import { styled } from "@linaria/react";
import { useStrings, type OptionsLoadingProperties } from "@formbox/theme";

export function OptionsLoading({ isLoading }: OptionsLoadingProperties) {
  const strings = useStrings();

  if (isLoading) {
    return <Hint role="status">{strings.selection.loadingOptions}</Hint>;
  }
  return;
}

const Hint = styled.div`
  font-size: 0.875rem;
  color: #4a5568;
`;
