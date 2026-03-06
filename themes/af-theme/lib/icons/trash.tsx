export function Trash({ size = 16 }: { size?: number }) {
  return (
    <i
      aria-hidden
      className="fa-solid fa-trash"
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    />
  );
}
