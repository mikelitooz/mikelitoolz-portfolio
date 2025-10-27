interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtitle: string;
  bgColor: string;
}

export function StatsCard({ icon, value, label, subtitle, bgColor }: StatsCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:transform hover:scale-105">
      <div className={`${bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <p className="text-foreground/60 text-sm">{subtitle}</p>
    </div>
  );
}
