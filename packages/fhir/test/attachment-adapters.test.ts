import { describe, expect, it } from "vitest";

import { R4AttachmentAdapter, R5AttachmentAdapter } from "../lib/index.ts";

describe("Attachment adapters", () => {
  it("maps R4 size number<->string while R5 stores string directly", () => {
    const r4Adapter = new R4AttachmentAdapter();
    const r5Adapter = new R5AttachmentAdapter();

    const r4Attachment = {} as Parameters<R4AttachmentAdapter["setSize"]>[0];
    const r5Attachment = {} as Parameters<R5AttachmentAdapter["setSize"]>[0];

    r4Adapter.setSize(r4Attachment, "128");
    r5Adapter.setSize(r5Attachment, "128");

    expect((r4Attachment as { size?: unknown }).size).toBe(128);
    expect((r5Attachment as { size?: unknown }).size).toBe("128");
    expect(r4Adapter.getSize(r4Attachment)).toBe("128");
    expect(r5Adapter.getSize(r5Attachment)).toBe("128");
  });

  it("drops invalid R4 size strings while R5 preserves raw value", () => {
    const r4Adapter = new R4AttachmentAdapter();
    const r5Adapter = new R5AttachmentAdapter();

    const r4Attachment = {} as Parameters<R4AttachmentAdapter["setSize"]>[0];
    const r5Attachment = {} as Parameters<R5AttachmentAdapter["setSize"]>[0];

    r4Adapter.setSize(r4Attachment, "not-a-number");
    r5Adapter.setSize(r5Attachment, "not-a-number");

    expect((r4Attachment as { size?: unknown }).size).toBeUndefined();
    expect((r5Attachment as { size?: unknown }).size).toBe("not-a-number");
    expect(r4Adapter.getSize(r4Attachment)).toBeUndefined();
    expect(r5Adapter.getSize(r5Attachment)).toBe("not-a-number");
  });
});
