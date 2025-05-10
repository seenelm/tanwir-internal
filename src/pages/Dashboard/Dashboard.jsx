import StatCard from '../../components/Cards/StatCard'
import DocCard from '../../components/Documents/DocCard'

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
            icon="📄" 
            title="Student Handbook" 
            description="Guidelines and policies for students" 
            onView={() => handleViewDocument('handbook')} 
          />
          
          <DocCard 
            icon="📝" 
            title="Registration Form" 
            description="New student registration" 
            onView={() => handleViewDocument('registration')} 
          />
          
          <DocCard 
            icon="📊" 
            title="Semester Calendar" 
            description="Important dates and events" 
            onView={() => handleViewDocument('calendar')} 
          />
          
          <DocCard 
            icon="📚" 
            title="Course Catalog" 
            description="Available courses and descriptions" 
            onView={() => handleViewDocument('catalog')} 
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
