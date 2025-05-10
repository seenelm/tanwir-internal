import StatCard from '../../components/Cards/StatCard'
import DocCard from '../../components/Documents/DocCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBook, 
  faFileSignature, 
  faCalendarDay, 
  faBookOpen 
} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  const handleViewDocument = (docId) => {
    console.log(`Viewing document: ${docId}`)
    // Logic to view the document would go here
  }

  return (
    <div className="tab-content">
      <h2>Dashboard</h2>
      
      <div className="dashboard-stats">
        <StatCard 
          title="PROPHETIC GUIDANCE" 
          value="0" 
          description="Students this semester" 
          percentage="↑ 10%" 
        />
        
        <StatCard 
          title="ARABIC STUDIES" 
          value="0" 
          description="Students this semester" 
          percentage="↑ 10%" 
        />
        
        <StatCard 
          title="WAITLIST" 
          value="15" 
          description="Current students" 
          percentage="↑ 10%" 
        />
        
        <StatCard 
          title="COMMUNITY" 
          value="500" 
          description="Active members" 
          percentage="↑ 10%" 
        />
      </div>
      
      <div className="quick-docs-section">
        <h3>Quick Documents</h3>
        <div className="docs-grid">
          <DocCard 
            icon={<FontAwesomeIcon icon={faBook} />} 
            title="Volunteer Handbook" 
            description="Guidelines and policies for students" 
            onView={() => handleViewDocument('handbook')} 
          />
          
          <DocCard 
            icon={<FontAwesomeIcon icon={faFileSignature} />} 
            title="Volunteer Application" 
            description="New volunteer application" 
            onView={() => handleViewDocument('registration')} 
          />
          
          <DocCard 
            icon={<FontAwesomeIcon icon={faCalendarDay} />} 
            title="Internal Calendar" 
            description="Important dates and events" 
            onView={() => handleViewDocument('calendar')} 
          />
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard
