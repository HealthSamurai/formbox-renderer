export function Plus({ size = 16 }: { size?: number }) {
  return (
    <i
      aria-hidden
      className="fa-solid fa-plus"
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    />
  );
}
