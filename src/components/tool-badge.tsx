interface ToolBadgeProps {
  name: string;
  icon: string;
}

export function ToolBadge({ name, icon }: ToolBadgeProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}
