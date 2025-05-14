import React, { useEffect, useState } from 'react';
import '../../styles/eventcalendar.css';

function EventCalendar() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    description: '',
    contactEmail: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Create a script element to load the Elfsight widget
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);
    
    // Cleanup function to handle component unmounting
    return () => {
      // Remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    // For demonstration, we'll simulate a successful submission after a delay
    setTimeout(() => {
      console.log('Event request submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowRequestForm(false);
        setFormData({
          eventName: '',
          eventDate: '',
          startTime: '',
          endTime: '',
          description: '',
          contactEmail: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="event-calendar-container">
      <div className="event-calendar-header">
        <div className="header-content">
          <h2>Event Calendar</h2>
          <p>View upcoming events and important dates.</p>
        </div>
        <div className="header-actions">
          <button 
            className="request-event-button" 
            onClick={() => setShowRequestForm(true)}
          >
            Request New Event
          </button>
        </div>
      </div>
      
      <div className="elfsight-widget-container">
        {/* This div will be automatically transformed into the Elfsight Event Calendar widget */}
        <div className="elfsight-app-db2df6b4-435b-43f8-905d-c1a3f5b230de"></div>
      </div>

      {/* Event Request Modal */}
      {showRequestForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Request a New Event</h3>
              <button 
                className="close-button" 
                onClick={() => setShowRequestForm(false)}
              >
                ×
              </button>
            </div>
            
            {submitSuccess ? (
              <div className="success-message">
                <p>Your event request has been submitted successfully!</p>
                <p>We'll review your request and add it to the calendar soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="event-request-form">
                <div className="form-group">
                  <label htmlFor="eventName">Event Name*</label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date*</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="startTime">Start Time*</label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group half">
                    <label htmlFor="endTime">End Time*</label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Event Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactEmail">Contact Email*</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => setShowRequestForm(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;
