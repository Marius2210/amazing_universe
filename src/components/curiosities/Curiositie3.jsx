import venus from '../../assets/images/venus.png'

const Curiositie3 = () => {
  return (
    <div className="curiositie3">
      <div className="curiositie3-text">
        <h3>On Venus, a year is less than a day</h3>
        <p>
        Venus is the planet with the slowest rotation in the Solar System. It rotates so slowly that it takes longer to rotate on its axis than to go around the Sun. In other words, its day is longer than its year.
          <br />
          <a
            href="https://www.esquire.com/es/tecnologia/g37142200/curiosidades-universo-cosmos-estrellas/"
            target="_blank"
          >
            Souce here
          </a>
        </p>
      </div>
      <div className="venus">
        <img src={venus}/>
      </div>
    </div>
  );
};

export default Curiositie3;
