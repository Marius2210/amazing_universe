import universe2 from '../../assets/images/universe2.png'

const Curiositie10 = () => {
  return (
    <div className="curiositie10">
      <div className="universe2">
        <img src={universe2}/>
      </div>
      <div className="curiositie10-text">
        <h3>How will the Universe die? Do you have a limit?</h3>
        <p>
        They are all theories. There are physicists who consider that the Universe is infinite, but others (the majority) that sooner or later will die. Now it is not clear how. Cooling down, being devoured by black holes, time stopping, tearing itself apart, contracting into an infinitesimally small point to originate a new Big Bang… There are many exciting theories.
          <br />
          <a
            href="https://blog.wited.com/wited-blog/el-universo-cinco-increibles-curiosidades-que-te-impactaran/"
            target="_blank"
          >
            Source here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Curiositie10;
