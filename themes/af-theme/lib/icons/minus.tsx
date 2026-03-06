export function Minus({ size = 16 }: { size?: number }) {
  return (
    <i
      aria-hidden
      className="fa-solid fa-minus"
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    />
  );
}
