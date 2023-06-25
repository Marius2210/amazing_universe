import { Link } from "react-router-dom";
import Button from "./Button";
import rocket from '../assets/images/rocket.png';

const LinkCuriosities = () => {
  return (
    <div className="link-curiosities">
      <div className="text3">
        <h3>The best curiosities</h3>
        <p>Discover the most interesting curiosities about our universe.</p>
        <Link to="curiosities">
          <Button text="See more" />
        </Link>
      </div>
      <div className="rocket">
        <img src={rocket} />
      </div>
    </div>
  );
};

export default LinkCuriosities;
