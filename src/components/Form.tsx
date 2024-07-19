// Form.tsx
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container">
      <h1>Event Details Form</h1>
      <form action="" method="">
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            placeholder="Enter the event name"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Event Description</label>
          <textarea
            id="eventDescription"
            placeholder="Provide a description for the event"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input type="date" id="eventDate" />
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Event Location</label>
          <input
            type="text"
            id="eventLocation"
            placeholder="Where will the event be held?"
            autoComplete="off"
          />
        </div>
        <button type="submit">
          Add Event
        </button>
        
      </form>
      
          <Link to="/EMS/eventsList"><button type="submit" className="btn-all-events">View All Events</button></Link>
        
    </div>
  );
};

export default Form;
