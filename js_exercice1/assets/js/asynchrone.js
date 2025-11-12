fetch("src/data/donnee.json")
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        data.forEach(element => {
            console.log(element.nom + " :  " + element.age + " ans");
        })
    })

    .catch(() => {
        console.log("Données non disponibles")
    });





async function fct_async (){
    const data = "Hello";
    return data;
}

fct_async()
    .then((data)  => console.log(data))
.catch(()=> console.error("catch : erreur"));

console.log("Affichage placé après l'appel assynchrone");

async function autreFct()   {
    const reponse = await fct_async();
    console.log(reponse);
}

autreFct();
console.log("Après l'appel de l'autreFct");