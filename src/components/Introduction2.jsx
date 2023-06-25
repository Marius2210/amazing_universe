import telescope from '../assets/images/telescope.png';

const Introduction2 = () => {
    return (
        <div className="introduction2">
            <div className="telescope">
                <img src={telescope}/>
            </div>
            <div className="text2">
            <h2>If you are curious about the universe, this website is for you</h2>
                <p>The universe is so vast that it is impossible for us not to find planets or <br/>celestial bodies that amaze us or that are so mysterious that we cannot find an explanation to understand them.</p>
            </div>
        </div>
    )
} 

export default Introduction2