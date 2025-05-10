function DocCard({ icon, title, description, onView }) {
  return (
    <div className="doc-card" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
      <div className="doc-card-icon">{icon}</div>
      <div className="doc-card-content">
        <h4 className="doc-card-title">{title}</h4>
        <p className="doc-card-description">{description}</p>
      </div>
      <button className="doc-card-action" onClick={onView}>View</button>
    </div>
  )
}

export default DocCard
