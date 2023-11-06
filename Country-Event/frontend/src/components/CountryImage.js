import classes from "./CountryImage.module.css";
import ImageCountry from "../img/country.png";
function CountryImage() {
  return (
    <div>
      <img
        src={ImageCountry}
        alt="ImageCoutry"
        className={classes.ImageCountry}
      />
    </div>
  );
}

export default CountryImage;
