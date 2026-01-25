import { observer } from "mobx-react-lite";
import type { IForm } from "../../types.ts";
import { renderErrors } from "../node/errors.tsx";
import { NodeList } from "../node/node-list.tsx";
import { useTheme } from "../../ui/theme.tsx";

export const Form = observer(function Form({
  store,
  onSubmit,
}: {
  store: IForm;
  onSubmit?: (() => void) | undefined;
}) {
  const { Form: ThemedForm } = useTheme();
  return (
    <ThemedForm
      title={store.questionnaire.title}
      description={store.questionnaire.description}
      errors={renderErrors(store)}
      before={<NodeList nodes={store.headerNodes} />}
      after={<NodeList nodes={store.footerNodes} />}
      onSubmit={onSubmit}
      onCancel={() => store.reset()}
      pagination={store.pagination}
    >
      <NodeList nodes={store.contentNodes} />
    </ThemedForm>
  );
});
