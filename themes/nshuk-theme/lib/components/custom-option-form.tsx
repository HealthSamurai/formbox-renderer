import { styled } from "@linaria/react";
import { useStrings, type CustomOptionFormProperties } from "@formbox/theme";

export function CustomOptionForm({
  content,
  errors,
  onCancel,
  onSubmit,
  canSubmit,
}: CustomOptionFormProperties) {
  const strings = useStrings();

  return (
    <Root>
      {content}
      {errors}

      <div className="nhsuk-button-group nhsuk-button-group--small nhsuk-u-margin-right-0">
        <button
          type="button"
          onClick={onCancel}
          className="nhsuk-button nhsuk-button--small nhsuk-button--secondary"
        >
          {strings.dialog.cancel}
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={canSubmit === false}
          className="nhsuk-button nhsuk-button--small nhsuk-button--secondary"
        >
          {strings.dialog.submit}
        </button>
      </div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-3);
`;
