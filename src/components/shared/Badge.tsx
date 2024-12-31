interface BadgeProps {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  positionClasses?: string;
}

export default function Badge({
  label,
  bgColor,
  textColor,
  borderColor,
  positionClasses = "absolute top-4 left-4",
}: BadgeProps) {
  return (
    <div
      className={`${positionClasses} uppercase tracking-wider px-2 py-1 border border-slate-400 rounded text-xs font-semibold ${bgColor} ${textColor} ${borderColor}`}
    >
      {label}
    </div>
  );
}
