// Form.tsx
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/hook";
import { ChangeEvent } from "react";

const Form = () => {
  const { state, dispatch } = useGlobalContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputType: string
  ) => {
    switch (inputType) {
      case "name":
        return dispatch({ type: "addEventName", payload: e.target.value });
      case "description":
        return dispatch({
          type: "addEventDescription",
          payload: e.target.value,
        });
      case "date":
        return dispatch({ type: "addEventDate", payload: e.target.value });
      case "location":
        return dispatch({ type: "addEventLocation", payload: e.target.value });
      default:
        break;
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.eventName || !state.eventDescription || !state.eventDate || !state.eventLocation) {
      dispatch({
        type: "addError",
        payload: "All fields must be filled out"
      });
      return;
    }
  
    // Clear any existing error
    dispatch({
      type: "clearError",
      payload: ""
    });
  
    // Proceed with form submission if no errors
    console.log("submitted", state);
    dispatch({type: "clearFields", payload: ""})
  };

  return (
    <div className="container">
      <h1>Event Details Form</h1>
      <form action="" method="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            placeholder="Enter the event name"
            autoComplete="off"
            value={state.eventName}
            onChange={(e) => handleChange(e,"name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Event Description</label>
          <textarea
            id="eventDescription"
            placeholder="Provide a description for the event"
            autoComplete="off"
            value={state.eventDescription}
            onChange={(e) => handleChange(e, "description")}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            id="eventDate"
            value={state.eventDate}
            onChange={(e) => handleChange(e, "date")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Event Location</label>
          <input
            type="text"
            id="eventLocation"
            placeholder="Where will the event be held?"
            autoComplete="off"
            value={state.eventLocation}
            onChange={(e) => handleChange(e, "location")}
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
      <h1 className="form-error">{state.error}</h1>
      <Link to="/EMS/eventsList">
        <button type="submit" className="btn-all-events">
          View All Events
        </button>
      </Link>
    </div>
  );
};

export default Form;
