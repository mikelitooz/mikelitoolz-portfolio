interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="section-heading mb-4 text-foreground">{title}</h2>;
}
