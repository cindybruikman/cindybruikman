import eventsData from "./events.json";
import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

const EventsList = () => {
  const events = eventsData.events;

  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {events.map((event) => (
          <div key={event.id} className={classes.item}>
            <div className={classes.content}>
              {" "}
              <h2>{event.title}</h2>
              <p className={classes.date}>Date: {event.date}</p>
              <img src={event.image} alt={event.title} />
              <p className={classes.event_discription}>{event.description}</p>
              <Link to="/events">
                {" "}
                <button className={classes.event_button}>Details</button>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
