import multiverse from '../../assets/images/multiverse.png'

const Curiositie9 = () => {
  return (
    <div className="curiositie9">
      <div className="curiositie9-text">
        <h3>Does the multiverse exist?</h3>
        <p>
        In the Multiverse Theory, he explains that our Cosmos could be just one more of the infinities that already exist. However, as we are in a very different space-time, it is and always will be impossible to verify their existence and communicate with them. And of course, if the multiverse existed, "nothingness" would separate us.
          <br />
          <a
            href="https://medicoplus.com/ciencia/curiosidades-universo"
            target="_blank"
          >
            Source here
          </a>
        </p>
      </div>
      <div className="multiverse">
        <img src={multiverse}/>
      </div>
    </div>
  );
};

export default Curiositie9;
