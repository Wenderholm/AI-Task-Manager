function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>
        <Icon size={21} />
      </div>

      <h2>{value}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default StatCard;
