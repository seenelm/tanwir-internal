function DocCard({ icon, title, description, onView }) {
  return (
    <div className="doc-card">
      <div className="doc-icon">{icon}</div>
      <div className="doc-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button className="doc-action" onClick={onView}>View</button>
    </div>
  )
}

export default DocCard
