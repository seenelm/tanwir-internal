import { useState } from 'react'

function SidebarNav({ activeTab, onTabChange, onClose }) {
  const [expandedSection, setExpandedSection] = useState('administration')
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }
  
  const handleTabClick = (tab) => {
    onTabChange(tab)
    if (window.innerWidth < 768) {
      onClose()
    }
  }

  return (
    <nav className="sidebar-nav">
      {/* Administration Section */}
      <div className="nav-section">
        <button 
          className={`section-header ${expandedSection === 'administration' ? 'expanded' : ''}`}
          onClick={() => toggleSection('administration')}
        >
          <span>Administration</span>
          <span className="section-icon">{expandedSection === 'administration' ? '−' : '+'}</span>
        </button>
        
        {expandedSection === 'administration' && (
          <div className="section-items">
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleTabClick('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`nav-item ${activeTab === 'member-directory' ? 'active' : ''}`}
              onClick={() => handleTabClick('member-directory')}
            >
              Member Directory
            </button>
            <button 
              className={`nav-item ${activeTab === 'event-calendar' ? 'active' : ''}`}
              onClick={() => handleTabClick('event-calendar')}
            >
              Event Calendar
            </button>
          </div>
        )}
      </div>
      
      {/* Resources Section */}
      <div className="nav-section">
        <button 
          className={`section-header ${expandedSection === 'resources' ? 'expanded' : ''}`}
          onClick={() => toggleSection('resources')}
        >
          <span>Resources</span>
          <span className="section-icon">{expandedSection === 'resources' ? '−' : '+'}</span>
        </button>
        
        {expandedSection === 'resources' && (
          <div className="section-items">
            <button 
              className={`nav-item ${activeTab === 'document-library' ? 'active' : ''}`}
              onClick={() => handleTabClick('document-library')}
            >
              Document Library
            </button>
            <button 
              className={`nav-item ${activeTab === 'media-gallery' ? 'active' : ''}`}
              onClick={() => handleTabClick('media-gallery')}
            >
              Media Gallery
            </button>
            <button 
              className={`nav-item ${activeTab === 'reports-analytics' ? 'active' : ''}`}
              onClick={() => handleTabClick('reports-analytics')}
            >
              Reports and Analytics
            </button>
          </div>
        )}
      </div>
      
      {/* Student Portal */}
      <button 
        className={`nav-item standalone ${activeTab === 'student-portal' ? 'active' : ''}`}
        onClick={() => handleTabClick('student-portal')}
      >
        Student Portal
      </button>
    </nav>
  )
}

export default SidebarNav
