import React from 'react'

export default function AffichageFiltre({destinations},{texte}) {
    return (
        <>
            <h3>Destinations : {texte}</h3>
            <ul className="no_puce">
                {destinations.map((elt,i) => (
                    <li key={elt} className="textGras">
                        <img src={"/images/"+elt.image} alt="Illustration"/><br/>
                        {elt.Ville} située en {elt.situation} ({elt.pays}, {elt.continent})
                    </li>
                ))}
            </ul>
        </>
    )
}