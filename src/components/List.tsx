// List.tsx
import { Link } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

import { useGlobalContext } from "../contexts/hook";

const List = () => {
  const { modal, setModal } = useGlobalContext();

  return (
    <div className="container">
      <h1>Events List</h1>
      <div className="event">
        <span className="event-name">Event 1</span>
        <div className="event-buttons">
          <button className="btn-view-event" onClick={() => setModal(true)}>
            View Event
          </button>
          <button className="btn-delete-event">Delete Event</button>
        </div>
      </div>
      <div className="event">
        <span className="event-name">Event 2</span>
        <div className="event-buttons">
          <button className="btn-view-event" onClick={() => setModal(true)}>
            View Event
          </button>
          <button className="btn-delete-event">Delete Event</button>
        </div>
      </div>
      <div className="event">
        <span className="event-name">Event 3</span>
        <div className="event-buttons">
          <button className="btn-view-event" onClick={() => setModal(true)}>
            View Event
          </button>
          <button className="btn-delete-event">Delete Event</button>
        </div>
      </div>
      <div className="event">
        <span className="event-name">Event 4</span>
        <div className="event-buttons">
          <button className="btn-view-event" onClick={() => setModal(true)}>
            View Event
          </button>
          <button className="btn-delete-event">Delete Event</button>
        </div>
      </div>
      <Link to="/EMS">
        <button type="submit">Add Event</button>
      </Link>
      {modal && (
        <div className="modal" id="eventModal">
          <div className="modal-content">
            <span className="close-btn" onClick={()=>setModal(false)}><CloseIcon /></span>
            <h2>Event Name</h2>
            <p>
              <strong>Description:</strong> Event description goes here.
            </p>
            <p>
              <strong>Date:</strong> Event date goes here.
            </p>
            <p>
              <strong>Location:</strong> Event location goes here.
            </p>
            <p>
              <strong>Attendees:</strong> List of attendees goes here.
            </p>
            <h3>Add an Attendee</h3>
            <form id="addAttendeeForm">
              <input
                type="text"
                id="attendeeName"
                name="attendeeName"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="text"
                id="attendeeContactNumber"
                name="attendeeContactNumber"
                placeholder="Contact Number"
                autoComplete="off"
                required
              />
              <button type="submit">Add Attendee</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
