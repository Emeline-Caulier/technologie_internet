import button from "bootstrap/dist/css/bootstrap.min.css";
import Compteur from "./Compteur";
import Ville from "./Ville";
import Ville2 from "./Ville2";

export default function Bienvenue(props)
{
    const ville = "Mons";
    const cp = "7000";
    const pays ="Belgique";
    const clickHandel1 = () => {
        console.log(props);
        console.log("Cliqué");
    }
    return (
        <>
            <p>Bienvenue dans le programme</p>
            <p>Nombre reçu : {props.nombre}</p>
            <button className="btn btn-primary"  onClick={clickHandel1}>Cliquez</button>
            <Ville2 ville={ville} cp={cp} pays={pays} />
        </>
    )
}