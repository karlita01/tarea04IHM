import Imagen from './data/imagen.json'
import './style.css';

const Single = () => {

    const currentRoute = window.location.pathname;
    const imagen = Imagen.find(it => currentRoute.includes(it.slug))

    return (<>
        <br></br>
        <h2><br></br>{imagen.name}</h2>
        <hr></hr>
        <div class=" col-6 centrar">
        <div className="carrusel"><img src={imagen.picture}></img></div></div>
        <div class=" col-6 centrar">
        <br></br>
        <p><h3>{imagen.description2}</h3></p>
        <br></br>
        <p><h4>{imagen.description3}</h4></p>
        <br></br>
        <p><h2>{imagen.description}</h2></p>
        </div>
    </>);
}

export default Single;