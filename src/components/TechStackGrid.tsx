interface StackGroup {
  category: string;
  items: string;
}

interface TechStackGridProps {
  groups: StackGroup[];
}

export function TechStackGrid({ groups }: TechStackGridProps) {
  return (
    <div className="stack-grid">
      {groups.map((g) => (
        <div key={g.category}>
          <h4 className="stack-group__title">{g.category}</h4>
          <p className="stack-group__items">{g.items}</p>
        </div>
      ))}
    </div>
  );
}
