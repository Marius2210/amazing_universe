import sun from '../../assets/images/sun.png'

const Curiositie7 = () => {
  return (
    <div className="curiositie7">
      <div className="curiositie7-text">
        <h3>The Sun has 5.5 billion years of life left</h3>
        <p>
        The Sun is a yellow dwarf, so it has a life expectancy of about 10 billion years. Considering that it formed 4.6 billion years ago, it's still not even halfway through its life. Now, when he dies, the Earth will disappear with him, because before the star becomes a white dwarf, it will increase in size, engulfing us. Certainly a tragic ending.
          <br />
          <a
            href="https://medicoplus.com/ciencia/curiosidades-universo"
            target="_blank"
          >
            Source here
          </a>
        </p>
      </div>
      <div className="sun">
        <img src={sun}/>
      </div>
    </div>
  );
};

export default Curiositie7;
