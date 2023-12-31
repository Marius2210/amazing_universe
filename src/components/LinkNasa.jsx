import { Link } from "react-router-dom";
import Button from "./Button";
import universe3 from '../assets/images/universe3.png';

const LinkNasa = () => {
  return (
    <div className="link-nasa">
      <div className="text5">
        <h3>NASA APOD-Astro Picture of the day</h3>
        <p>
          Discover the images that NASA takes every day from different places in the universe.
        </p>
        <Link to='/nasa'><Button text='See more'/></Link>
        </div>
        <div className="universe3">
        <img src={universe3} />
      </div>
    </div>
  );
};

export default LinkNasa;