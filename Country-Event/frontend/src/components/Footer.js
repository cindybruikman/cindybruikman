import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_section_padding}>
        <div className={classes.footer_links}>
          <div className={classes.footer_links_div}>
            <h4>About</h4>
            <a href="#">
              <p>The events</p>
            </a>
            <a href="#">
              <p>The team</p>
            </a>
            <a href="#">
              <p>The company</p>
            </a>
          </div>
          <div className={classes.footer_links_div}>
            <h4>Contact</h4>
            <a href="#">
              <p>Twitter</p>
            </a>
            <a href="#">
              <p>Facebook</p>
            </a>
            <a href="#">
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className={classes.footer_below}>
          <div className={classes.footer_copyright}>
            <p>
              @{new Date().getFullYear()} Cindy Bruikman. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
