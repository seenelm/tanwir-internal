import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faUsers, 
  faCalendarAlt, 
  faFileAlt, 
  faImages, 
  faChartBar, 
  faGraduationCap,
  faKeyboard,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

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

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-logo">
          <span className="logo-symbol">#</span>
          <div className="brand-info">
            <h2>Tanwir</h2>
            <p>admin@tanwir.org</p>
          </div>
        </div>
      </div>
      
      <div className="sidebar-section">
        <h3 className="section-title">Quick actions</h3>
        <div className="shortcut-key"><FontAwesomeIcon icon={faKeyboard} className="shortcut-icon" /> K</div>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('dashboard')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faHome} /></span>
          <span>Dashboard</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('member-directory')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faUsers} /></span>
          <span>Member Directory</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('event-calendar')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
          <span>Event Calendar</span>
        </button>
        
        <div className="nav-divider"></div>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('document-library')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faFileAlt} /></span>
          <span>Document Library</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('media-gallery')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faImages} /></span>
          <span>Media Gallery</span>
        </button>
        
        <button 
          className="nav-item" 
          onClick={() => handleNavigation('reports-analytics')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faChartBar} /></span>
          <span>Reports and Analytics</span>
          <span className="nav-badge">New</span>
        </button>
        
        <div className="nav-divider"></div>
        
        <button 
          className="nav-item external-link" 
          onClick={() => openExternalLink('https://tanwir-students.netlify.app')}
        >
          <span className="nav-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
          <span>Student Portal</span>
          <span className="external-icon"><FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
