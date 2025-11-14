interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="section-heading text-center mb-12 text-foreground">{title}</h2>;
}
