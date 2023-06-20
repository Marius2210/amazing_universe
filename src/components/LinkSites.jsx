import Button from "./Button";
import { Link } from "react-router-dom";

const LinkSites = () => {
  return (
    <div className="link-sites">
      <div className="black-hole2">
        <img src="src\assets\images\blackHole2.png" />
      </div>
      <div className="text4">
        <h4>Amazing sites</h4>
        <p>
          Discover the most curious, mysterious and amazing objects in the
          universe.
        </p>
        <Link to="sites">
          <Button text="See more" />
        </Link>
      </div>
      <div className="super-nova">
        <img src="src\assets\images\superNova.png" />
      </div>
    </div>
  );
};

export default LinkSites;
