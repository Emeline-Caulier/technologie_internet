import React, {useState, useEffect} from 'react'
import AffichageFiltre from './AffichageFiltre'

export default function Destinations(){
    const [destinations, setDestinations] = React.useState([]);
    const [villesContinents, setVillesContinents] = React.useState([]);
    useEffect(()=>{
        fetch("public/data/destinations.json")
        .then(res => res.json())
        .then(data => setDestinations(data))
            .catch((error) => console.log(error))

    },[])

    const clickHandleFiltre = ((continent) =>{
        console.log("Continent choisi : ", continent);
        const filtre = destinations.filter(elt => elt === continent)
        setVillesContinents(filtre);
    })
    return (
        <>
            <button onClick={() => clickHandleFiltre("Toutes")}>Toutes les destinations</button>
            <button onClick={() => clickHandleFiltre("Europe")}>Villes d'Europe</button>
            <button onClick={() => clickHandleFiltre("Amérique")}>Villes d'Amérique</button>
            {
                villesContinents.lenght === 0 ?(
                <AffichageFiltre destinations={destinations} texte="Toutes les destinations"/>
            ): (
                <AffichageFiltre destinations={villesContinents} texte="Quelques destinations"/>
            )}
        </>
    )
}