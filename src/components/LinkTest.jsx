import { Link } from "react-router-dom";
import Button from "./Button";

const LinkTest = () => {
  return (
    <div className="link-test">
      <div className="check">
        <img src="src\assets\images\check.png" />
      </div>
      <div className="text6">
        <h5>¡Test yourself!</h5>
        <p>Solve the following test with what you have learned on this website.</p>
        <Link to='test'><Button text='See more'/></Link>
      </div>
    </div>
  );
};

export default LinkTest;
