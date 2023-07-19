import { useState } from "react"
import { useEffect } from "react"
import Footer from "../Footer"
import Error from '../../assets/images/error.png'

 const Nasa = () => {

    //Estado para mostrar los datos de la Api, si es true los mostrar'a, si es false mostrará un error
    const [showData, setShowData] = useState(true);

    const getData = async () => {
        const key = "yvcm5OMdw1G6UHyhNio11cc27klQGINbfeQNQqTW"
        const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`

        try {
            const response = await fetch (url)
            const datos = await response.json()
            console.log(datos)
            return update(datos)
        } catch (error){
            console.error(error)
            setShowData(false)
        } 
    }

    const update = (datos) => {
        const title = document.getElementById('title');title.innerHTML = datos.title;
        const apodPic = document.getElementById('apod-pic');/*apodPic.src = datos.url*/ 
        const video = `<iframe className='video' src=${datos.url}></iframe>`
        if (datos.media_type == 'video'){
            apodPic.innerHTML = video;
        } else {
            apodPic.innerHTML = `<img className='img' src=${datos.url}></iframe>`
        }
        const caption = document.getElementById('caption');caption.innerHTML = datos.explanation;
        return datos;
    }

    useEffect(() => {
        getData();
    })

    /*Mostrar la fecha actual*/
    let currentDate = new Date() ;
    currentDate.getDate();
    currentDate.getMonth();
    currentDate.getFullYear();

    let yearMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    yearMonth[currentDate.getMonth()];
     
    return (
        <>
        <div className="content">
            <h1>NASA APOD-Astro Picture of the day</h1>
            <br/>
            <p>Information extracted from the NASA api
            <br/>
            <br/>
            <span>Today's date:</span>
            <br/>
               {`${currentDate.getDate()}/${yearMonth[currentDate.getMonth()]}/${currentDate.getFullYear()}`}
            </p>
            <br/>
                {showData ? (
                    <div className="data">
                      <h2 id="title"/>
                      <div id="apod-pic">
                      </div>    
                      <p id="caption"/>
                    </div>
                ) : (
                    <div className="error">
                        <img src={Error}/>
                        <p>An error has occurred with the server, please try again later.</p>
                    </div>
                )}
        </div> 
        <Footer/>
        </>
    )

 }    

 export default Nasa