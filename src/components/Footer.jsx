import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p className="footer1">
                "The universe not only has a history, but any possible history." <br/><span>Stephen Hawking</span></p>
                <br/>
                <span>I created my logo for free in <Link to='https://logomakr.com/' target='_blank'>LogoMakr.com</Link></span>
                <br/>
                <br/>
            <p>&copy;Amazing Universe
            <br />
            <span>by Mario Meléndez</span>
            </p>
            
        </footer>
    )
}

export default Footer