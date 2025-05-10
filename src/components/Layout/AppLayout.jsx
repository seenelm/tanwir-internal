import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../../App.css'

function AppLayout({ children, onTabChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Make setActiveTab available globally for the sidebar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.setActiveTab = (tab) => {
        if (onTabChange) {
          onTabChange(tab);
        }
      };
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        delete window.setActiveTab;
      }
    };
  }, [onTabChange]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="app-container">
      <div className="main-content">
        <button className="hamburger-menu" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar} 
        />
        
        <div className="content-area">
          {children}
        </div>
      </div>
      
      <div className={`overlay ${sidebarOpen ? 'visible' : ''}`} onClick={closeSidebar}></div>
    </div>
  )
}

export default AppLayout
