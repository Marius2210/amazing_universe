import wallHercules from '../../assets/images/wallHercules.jpg'
import wallHercules2 from '../../assets/images/wallHercules2.jpg'

const Site5 = () => {
    return (
      <div className="site5">
        <h1>5.Hercules-Corona Borealis Great Wall</h1>
        <div className="site5-text">
          <p>
          The Hercules-Corona Borealis Great Wall (also called the Hercules-Corona Borealis Supercluster Complex) is a giant superstructure of galaxies measuring more than 10000000000 light-years in length. It is so named because its center is located between the constellations of Hercules and Corona Borealis, but in reality its extension crosses more than 20 constellations covering 125° of the sky. It is the largest and most massive structure known, encompassing 11% of the entire observable universe.
            <br />
          </p>
          <div className="wall-hercules">
            <img src={wallHercules}/>
          </div>
        </div>
        <div className="site5-text2">
          <div className="wall-hercules2">
            <img src={wallHercules2}/>
          </div>
          <p>
          This gigantic structure was discovered in November 2013 through a survey of gamma-ray bursts that occur in the distant universe. The astronomers used data from the Swift Gamma-Ray Burst Mission and the Fermi gamma-ray telescope. The Hercules-Corona Borealis Great Wall was also the first structure, outside of large quasar clusters, to hold the title of the largest known structure in the universe since 1991.
            <br />
            <a href="https://es.wikipedia.org/wiki/Gran_Muralla_de_H%C3%A9rcules-Corona_Boreal" target="_blank">
              Source here
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Site5;