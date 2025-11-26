import button from "bootstrap/dist/css/bootstrap.min.css";
export default function Compteur() {
    const clickHandelPlus = () => {

    }
    const  clickHandelMoins = () => {

    }
    return (
        <>
            <h3>Compteur</h3>
            <br/>
            <button className="btn btn-primary" onClick={clickHandelPlus}>Incrémanter</button>
            <button className="btn btn-danger"  onClick={clickHandelMoins}>Décrémenter</button>
        </>
    )

}