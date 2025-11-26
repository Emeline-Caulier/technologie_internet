export default function Ville(props){
    return (
        <>
            <h3>Dans ville 1</h3>
            <p>Ville : {props.ville}</p>
            <p>CP : {props.cp}</p>
            <p>Pays : {props.pays}</p>
        </>
    )
}