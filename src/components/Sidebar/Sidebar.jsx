import { useState } from 'react'

function Sidebar({ isOpen, onClose }) {
  // Since we don't have react-router-dom, we'll use a simpler approach
  const handleNavigation = (tab) => {
    // We'll pass this up to the parent component
    if (typeof window !== 'undefined' && window.setActiveTab) {
      window.setActiveTab(tab)
    }
    
    if (window.innerWidth < 768) {
      onClose()
    }
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-logo">
          <span className="logo-symbol">#</span>
          <div className="brand-info">
            <h2>acai</h2>
            <p>admin@acai.com</p>
          </div>
        </div>
        <button className="close-sidebar" onClick={onClose}>×</button>
      </div>
      
      <div className="sidebar-section">
        <h3 className="section-title">Quick actions</h3>
        <div className="shortcut-key">⌘ K</div>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('dashboard')}
        >
          <span className="nav-icon">🏠</span>
          <span>Dashboard</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('member-directory')}
        >
          <span className="nav-icon">👥</span>
          <span>Member Directory</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('event-calendar')}
        >
          <span className="nav-icon">📅</span>
          <span>Event Calendar</span>
        </button>
        
        <div className="nav-divider"></div>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('document-library')}
        >
          <span className="nav-icon">📄</span>
          <span>Document Library</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('media-gallery')}
        >
          <span className="nav-icon">🖼️</span>
          <span>Media Gallery</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('reports-analytics')}
        >
          <span className="nav-icon">📊</span>
          <span>Reports and Analytics</span>
          <span className="nav-badge">New</span>
        </button>
        
        <div className="nav-divider"></div>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('student-portal')}
        >
          <span className="nav-icon">🎓</span>
          <span>Student Portal</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
