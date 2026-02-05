import { useCallback, useMemo } from "react";
import type { Attachment as ThemeAttachment } from "@formbox/theme";

import type { Attachment } from "../../../../fhir/generated-types.ts";
import type { IFhirAdapter } from "../../../../fhir/fhir-adapter.ts";
import {
  parseNumber,
  prepareAttachmentFromFile,
} from "../../../../utilities.ts";
import { useTheme } from "../../../../ui/theme.tsx";

export type AttachmentInputProperties = {
  value: Attachment | undefined;
  adapter: IFhirAdapter;
  onChange: (value?: Attachment) => void;
  id: string;
  ariaLabelledBy: string;
  ariaDescribedBy?: string | undefined;
  disabled?: boolean | undefined;
  accept?: string | undefined;
};

export function AttachmentInput({
  value,
  adapter,
  onChange,
  id,
  ariaLabelledBy,
  ariaDescribedBy,
  disabled,
  accept,
}: AttachmentInputProperties) {
  const { FileInput: ThemedFileInput } = useTheme();

  const handleFileChange = useCallback(
    async (file: File | undefined) => {
      if (file) {
        onChange(await prepareAttachmentFromFile(file, adapter));
      } else {
        onChange();
      }
    },
    [adapter, onChange],
  );

  const themeValue = useMemo<ThemeAttachment | undefined>(() => {
    return (
      value && {
        ...value,
        size: parseNumber(adapter.attachment.getSize(value)),
      }
    );
  }, [adapter, value]);

  return (
    <ThemedFileInput
      id={id}
      ariaLabelledBy={ariaLabelledBy}
      ariaDescribedBy={ariaDescribedBy}
      disabled={disabled}
      accept={accept}
      value={themeValue}
      onChange={(file) => {
        void handleFileChange(file);
      }}
    />
  );
}
