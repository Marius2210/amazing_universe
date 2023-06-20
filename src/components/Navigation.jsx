import { Link } from "react-router-dom"
import BurguerButton from "./BurguerButton"
import React, { useState } from "react";

const Navigation = () => {

    /*Usamos un estado para controlar el estado del boton, cuando le demos click lo va a guardar en un estado que va a estar activo y cuando le demos de nuevo no va a estar activo*/
    const [clicked, setClicked] = useState(false);
    /*Función para al dar click se muestre la navegación*/
    const handleClick = () => {
        /*Cuando está true lo pasa a false y viceversa*/
        setClicked(!clicked)
    }

    return ( 
      <nav className="navigation">
        <div className="title">
        <Link to="/"><img src="src\assets\images\title.png"/></Link>
        </div>
        <ul className={`nav-main ${clicked ? "active" : ""}`}>
            <li>
                <Link to='curiosities' className="list">Curiosities</Link>
            </li>
            <li>
                <Link to='sites' className="list">Amazing sites</Link>
            </li>
            <li>
                <Link to='nasa' className="list">NASA APOD</Link>
            </li>
            <li>
                <Link to='test' className="list">Test</Link>
            </li>
        </ul>
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
      </nav>
    )
}

export default Navigation