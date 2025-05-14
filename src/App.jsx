import { useState } from 'react'
import './App.css'
import './styles/index.js'

// Import layout components
import AppLayout from './components/Layout/AppLayout'

// Import page components
import Dashboard from './pages/Dashboard/Dashboard'
import MemberDirectory from './pages/MemberDirectory/MemberDirectory'
import EventCalendar from './pages/EventCalendar/EventCalendar'
import DocumentLibrary from './pages/DocumentLibrary/DocumentLibrary'
import MediaGallery from './pages/MediaGallery/MediaGallery'
import ReportsAnalytics from './pages/ReportsAnalytics/ReportsAnalytics'
// Student Portal is now an external link, no need to import the component
// import StudentPortal from './pages/StudentPortal/StudentPortal'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'member-directory':
        return <MemberDirectory />
      case 'event-calendar':
        return <EventCalendar />
      case 'document-library':
        return <DocumentLibrary />
      case 'media-gallery':
        return <MediaGallery />
      case 'reports-analytics':
        return <ReportsAnalytics />
      // Student Portal is now an external link, no need for this case
      // case 'student-portal':
      //   return <StudentPortal />
      default:
        return <div>Select a tab</div>
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <AppLayout onTabChange={handleTabChange}>
      {renderTabContent()}
    </AppLayout>
  )
}

export default App
