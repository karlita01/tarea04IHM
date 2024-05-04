import Imagen from './data/imagen.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const imagen = Imagen.find(it => currentRoute.includes(it.slug))

    return (<>
        <br></br>
        <h2><br></br>{imagen.name}</h2>
        <hr></hr>
        <img src={imagen.picture}></img>
        <p><h2>{imagen.description}</h2></p>
        <p><h4>{imagen.description2}</h4></p>
        <p><h4>{imagen.description3}</h4></p>
    </>);
}

export default Single;