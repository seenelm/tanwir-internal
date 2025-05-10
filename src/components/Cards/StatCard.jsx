function StatCard({ title, value, description, percentage }) {
  const isPositive = !percentage.includes('-')
  
  return (
    <div className="stat-card" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
      <div className="stat-header">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-footer">
        <span>{description}</span>
        <span className={`stat-percentage ${isPositive ? 'positive' : 'negative'}`}>
          {percentage}
        </span>
      </div>
    </div>
  )
}

export default StatCard
