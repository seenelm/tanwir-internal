import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faDownload, 
  faEye, 
  faFilter, 
  faFolder 
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/documentlibrary.css';

function DocumentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Sample document data - in a real application, this would come from an API or database
  const documents = [
    {
      id: 1,
      title: 'Student Handbook 2025',
      description: 'Guidelines and policies for students',
      category: 'Handbooks',
      dateAdded: '2025-01-15',
      fileSize: '2.4 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/handbook.jpg',
      url: '/assets/documents/student-handbook-2025.pdf',
      tags: ['students', 'policies', 'guidelines']
    },
    {
      id: 2,
      title: 'Registration Form',
      description: 'New student registration form',
      category: 'Forms',
      dateAdded: '2025-02-03',
      fileSize: '1.1 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/form.jpg',
      url: '/assets/documents/registration-form.pdf',
      tags: ['registration', 'forms', 'new students']
    },
    {
      id: 3,
      title: 'Academic Calendar 2025-2026',
      description: 'Important academic dates and events',
      category: 'Calendars',
      dateAdded: '2025-03-10',
      fileSize: '3.2 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/calendar.jpg',
      url: '/assets/documents/academic-calendar-2025-2026.pdf',
      tags: ['calendar', 'academic', 'schedule']
    },
    {
      id: 4,
      title: 'Faculty Directory',
      description: 'Contact information for all faculty members',
      category: 'Directories',
      dateAdded: '2025-02-20',
      fileSize: '4.5 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/directory.jpg',
      url: '/assets/documents/faculty-directory.pdf',
      tags: ['faculty', 'contacts', 'directory']
    },
    {
      id: 5,
      title: 'Campus Map',
      description: 'Detailed map of the campus with building information',
      category: 'Maps',
      dateAdded: '2025-01-05',
      fileSize: '5.7 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/map.jpg',
      url: '/assets/documents/campus-map.pdf',
      tags: ['map', 'campus', 'buildings']
    },
    {
      id: 6,
      title: 'Financial Aid Guide',
      description: 'Guide to financial aid options and application process',
      category: 'Guides',
      dateAdded: '2025-03-15',
      fileSize: '2.8 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/financial.jpg',
      url: '/assets/documents/financial-aid-guide.pdf',
      tags: ['financial', 'aid', 'scholarships']
    },
    {
      id: 7,
      title: 'Course Catalog 2025',
      description: 'Complete list of courses with descriptions',
      category: 'Catalogs',
      dateAdded: '2025-01-20',
      fileSize: '8.3 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/catalog.jpg',
      url: '/assets/documents/course-catalog-2025.pdf',
      tags: ['courses', 'catalog', 'academics']
    },
    {
      id: 8,
      title: 'Housing Application',
      description: 'On-campus housing application form',
      category: 'Forms',
      dateAdded: '2025-02-15',
      fileSize: '1.5 MB',
      fileType: 'pdf',
      thumbnail: '/assets/thumbnails/housing.jpg',
      url: '/assets/documents/housing-application.pdf',
      tags: ['housing', 'application', 'residence']
    }
  ];

  // Extract unique categories
  const categories = ['all', ...new Set(documents.map(doc => doc.category))];

  // Filter documents based on search term and selected category
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <div className="document-library-container">
      <div className="document-library-header">
        <h2>Document Library</h2>
        <p>Access and download organization documents</p>
      </div>

      <div className="document-controls">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search documents..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <div className="category-filter">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="view-toggle">
            <button 
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className={`documents-container ${viewMode}`}>
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map(doc => (
            <div key={doc.id} className="document-card">
              <div className="document-thumbnail">
                <div className="pdf-icon">PDF</div>
              </div>
              <div className="document-info">
                <h3>{doc.title}</h3>
                <p className="document-description">{doc.description}</p>
                <div className="document-meta">
                  <span className="document-category">
                    <FontAwesomeIcon icon={faFolder} className="category-icon" /> {doc.category}
                  </span>
                  <span className="document-date">Added: {doc.dateAdded}</span>
                  <span className="document-size">{doc.fileSize}</span>
                </div>
                <div className="document-actions">
                  <button 
                    className="preview-button"
                    onClick={() => handleDocumentClick(doc)}
                  >
                    <FontAwesomeIcon icon={faEye} /> Preview
                  </button>
                  <a 
                    href={doc.url} 
                    download={doc.title}
                    className="download-button"
                  >
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-documents">
            <p>No documents found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* Document Preview Modal */}
      {showPreview && selectedDocument && (
        <div className="document-preview-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{selectedDocument.title}</h3>
              <button className="close-button" onClick={closePreview}>×</button>
            </div>
            <div className="modal-body">
              <div className="pdf-preview">
                <iframe
                  src={`${selectedDocument.url}#toolbar=0&navpanes=0`}
                  title={selectedDocument.title}
                  width="100%"
                  height="500px"
                />
              </div>
              <div className="preview-actions">
                <a 
                  href={selectedDocument.url} 
                  download={selectedDocument.title}
                  className="download-button"
                >
                  <FontAwesomeIcon icon={faDownload} /> Download Document
                </a>
                <a 
                  href={selectedDocument.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="open-button"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocumentLibrary;
