import React from "react";
import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className={classes.hero_section}>
      <h1 className={classes.h1_hero}>
        Experience the Future of Country Events!
      </h1>
      <p className={classes.p_hero}>
        Discover the magic of upcoming events in the world of country music and
        culture. Immerse yourself in the vibrant melodies, captivating
        performances, and heartwarming experiences that await you.
      </p>
      <Link to="/events">
        {" "}
        <button className={classes.hero_button}>All Events</button>
      </Link>
    </div>
    // <div>
    //   <img
    //     src={ImageCountry}
    //     alt="ImageCoutry"
    //     className={classes.ImageCountry}
    //   />
    // </div>
  );
}
// Import result is the URL of your image
//   return (
//     <h1></h1>
//     <div>
//       <button className="HeroButton">All Events</button>
//     </div>
//   );
// }

export default HeroSection;
