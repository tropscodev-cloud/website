interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="label-eyebrow flex items-center gap-3">
      <span>{number}</span>
      <span className="h-px w-8 bg-ink-mute/50" />
      <span>{label}</span>
    </div>
  );
}
