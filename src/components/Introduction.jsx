import astronaut from '../assets/images/astronaut.png';
import meteorite from '../assets/images/meteorite.png';

const Introduction = () => {
    return (
      <div className="introduction">
        <div className="astronaut">
            <img src={astronaut}/>
        </div>
        <div className="text1">
          <h1>Discover the most amazing of the cosmic universe</h1>
          <p>
          On this website you can find curiosities, mysteries, data and information about the universe in which we live.
          </p>
        </div>
        <div className="meteorite">
        <img src={meteorite}/>
        </div>
      </div>
    );
  }

  export default Introduction