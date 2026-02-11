import React, {useState} from 'react'

export default  function UseState(props) {

    const [date, setDate] = useState(2024);
    const [semaine, setSemaine] = useState(1);
    const handleClick1 = () => {
        setDate(date+1);
        console.log(date);
    }
    const handleClick2 = () => {
        setSemaine(semaine+1);
        console.log(semaine);
    }


    return (
        <>
            <button onClick={handleClick1}>Ajouter 1 an à {date}</button>
            <button onClick={handleClick2}>Semaine {semaine} : Cliquez pour changer de semaine</button>
            <p>Nombre reçu : {props.nbr}</p>
        </>
    )
}