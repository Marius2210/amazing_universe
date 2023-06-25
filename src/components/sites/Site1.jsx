import blackHole from '../../assets/images/blackHole.png'
import blackHole3 from '../../assets/images/blackHole3.jpg'
import blackHole4 from '../../assets/images/blackHole4.jpg'

const Site1 = () => {
  return (
    <div className="site1">
      <h1>1.Black hole</h1>
      <div className="site1-text">
        <p>
        A black hole is a finite region of space whose interior has a mass concentration high enough to generate a gravitational field such that, except for a certain type of quantum process, no particle or radiation—not even light—can escape from him.
          <br />
        </p>
        <div className="black-hole">
          <img src={blackHole}/>
        </div>
      </div>
      <div className="site1-text2">
        <div className="black-hole3">
          <img src={blackHole3}/>
        </div>
        <p>
        A black hole's gravity, or "space-time warp," causes a singularity enclosed by a closed surface, called an event horizon. This is predicted by the Einstein field equations. The event horizon separates the region of the black hole from the rest of the universe, and once inside it, no type of particle, material or electromagnetic, can leave, not even photons. This curvature is studied by general relativity, which predicted the existence of black holes and was its first indication.
          <br />
        </p>
      </div>
      <div className="site1-text3">
        <p>
        On April 10, 2019, the international Event Horizon Telescope consortium released the first image ever captured of a supermassive black hole located at the center of the galaxy M87. In turn, the announcement of another real image of a black hole in Sagittarius A* was expected; however, they clarified that it had not been obtained because the source was very variable during the observation periods, being resolved in the future.
          <br />
          <a href="https://es.wikipedia.org/wiki/Agujero_negro" target="_blank">
            Source here
          </a>
        </p>
        <div className="black-hole4">
          <img src={blackHole4}/>
        </div>
      </div>
    </div>
  );
};

export default Site1;
