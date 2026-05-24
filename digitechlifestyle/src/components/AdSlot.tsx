type AdSlotProps = {
  label: string;
  className?: string;
};

export function AdSlot({ label, className = "" }: AdSlotProps) {
  return (
    <aside className={`ad-slot rounded-lg ${className}`} aria-label={`${label} advertising placeholder`}>
      Google AdSense {label}
    </aside>
  );
}
