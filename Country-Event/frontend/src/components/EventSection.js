import classes from "./EventSection.module.css";

function EventSection() {
  return (
    <div className={classes.event_section}>
      <h1 className={classes.h1_section}>Welcome to our Events Page!</h1>
      <p className={classes.p_section}>
        Get ready for an extraordinary journey through the world of country
        music and culture. Here, you'll find a carefully curated selection of
        upcoming events that will immerse you in the essence of this beloved
        genre.
      </p>
    </div>
  );
}

export default EventSection;
