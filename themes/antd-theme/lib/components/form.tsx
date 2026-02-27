import type { FormEvent } from "react";
import type { FormProperties } from "@formbox/theme";
import { Button, Space, Typography } from "antd";

export function Form({
  onSubmit,
  onCancel,
  children,
  title,
  description,
  languageSelector,
  errors,
  before,
  after,
  signature,
  pagination,
}: FormProperties) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  const header =
    title || description ? (
      <Space orientation="vertical" size="small">
        {title && (
          <Typography.Title level={3} style={{ margin: 0 }}>
            {title}
          </Typography.Title>
        )}
        {description && (
          <Typography.Paragraph style={{ margin: 0 }}>
            {description}
          </Typography.Paragraph>
        )}
      </Space>
    ) : undefined;
  const top =
    header || languageSelector ? (
      <Space
        align="start"
        style={{ width: "100%", justifyContent: "space-between" }}
        wrap
      >
        {header && <div style={{ flex: 1, minWidth: 0 }}>{header}</div>}
        {languageSelector && (
          <div style={{ width: "min(100%, 16rem)", marginLeft: "auto" }}>
            {languageSelector}
          </div>
        )}
      </Space>
    ) : undefined;

  const actions = (
    <Space wrap>
      {signature}
      <Button type="primary" htmlType="submit" disabled={!onSubmit}>
        Submit
      </Button>
      <Button onClick={onCancel} disabled={!onCancel}>
        Cancel
      </Button>
    </Space>
  );

  if (pagination) {
    return (
      <form onSubmit={handleSubmit}>
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
          {top}
          {errors}
          {before}
          {children}
          <Space
            align="center"
            style={{ width: "100%", justifyContent: "space-between" }}
            wrap
          >
            <Space align="center" wrap>
              <Button
                type="default"
                onClick={pagination.onPrev}
                disabled={pagination.disabledPrev}
              >
                Previous
              </Button>
              <Typography.Text>
                {pagination.current} / {pagination.total}
              </Typography.Text>
              <Button
                type="default"
                onClick={pagination.onNext}
                disabled={pagination.disabledNext}
              >
                Next
              </Button>
            </Space>
            {actions}
          </Space>
          {after}
        </Space>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        {top}
        {errors}
        {before}
        {children}
        {after}
        {actions}
      </Space>
    </form>
  );
}
