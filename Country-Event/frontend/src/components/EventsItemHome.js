import eventsData from "./events.json";
import classes from "./EventsItemHome.module.css";
import { Link } from "react-router-dom";

const EventsItemHome = () => {
  const events = eventsData.events;

  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {events.map((event) => (
          <div key={event.id} className={classes.item}>
            <img src={event.image} alt={event.title} />
            <div className={classes.content}>
              {" "}
              <h2>{event.title}</h2>
              <p className={classes.event_discription}>{event.description}</p>
              <Link to="/events">
                {" "}
                <p className={classes.link}>See more</p>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventsItemHome;
