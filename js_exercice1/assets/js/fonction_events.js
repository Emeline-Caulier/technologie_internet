//<p id="a1">Exemple de gestion d'évènement</p>
const evn1 = document.querySelector('#a1');
evn1.addEventListener('click', () => {
    console.log("Paragraphe : " + evn1.textContent);
})

//Ex 1 : Interceptez un clic et agir sur le style!
//<div class="container"><p id="clic1">C</div>
const clicCouleur = document.querySelector('#clicCouleur');
clicCouleur.addEventListener('click', () => {
    const texte1 = document.querySelector('#texte1');
    //changement de couleur et de texte
    clicCouleur.classList.remove("fondJaune");
    texte1.innerHTML = "<span class='fondAqua'>--> Clic !</span>";
})


// Ex 2 : Dans le html, créez un petit formulaire demandant d’entrer son année de naissance.
// Par le JavaScript, récupérez la valeur et insérez dans une div/span l’âge de la personne.
//calcul de l'âge
//se placer sur l'objet html
const naiss = document.querySelector('#naiss');
//intercepter l'évenement "perte de focus"
naiss.addEventListener('blur', () => {
    //récupérer la valeur de l'input --> value
    const annee = naiss.value;
    console.log("annee : " + annee);
    const enCours = new Date();
    const enCours2 = enCours.getFullYear();
    console.log("enCours2 : " + enCours2);
    const age = enCours2 - parseInt(annee);
    document.querySelector('#age').textContent = age;
})
//Ex 3
// Intercepter le clic sur arrow1
const clicArrow1 = document.querySelector('#arrow1');
clicArrow1.addEventListener('click', () => {
    console.log("Contenu de arrow1 : " + clicArrow1.textContent);
});


// Récupérez la valeur contenue dans arrow2.
// Dans une fonction fléchée, multipliez cette valeur par 3 et
// insérez-la dans la balise d'id arrow3 (événement clic).

// Récupérer la valeur contenue dans arrow2
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");

// Fonction fléchée pour multiplier par 3
const multipliePar3 = (valeur) => Number(valeur) * 3;

// Clic sur arrow3 → multiplie sa valeur par 3 et l’insère dans arrow3
arrow3.addEventListener('click', () => {
    const valeur = arrow2.textContent;   // récupère le contenu texte
    const resultat = multipliePar3(valeur);
    arrow3.textContent = resultat;       // affiche le résultat dans arrow3
});

//Ex 4 : Utilisez la boucle forEach pour traiter les paragraphes et
// afficher également l'indice du paragraphe dans la liste
const clic6 = document.querySelector('#clic6');
clic6.addEventListener('click', () => {
    const exer9 = Array.from(document.querySelectorAll('.exer9')); // conversion en tableau
    exer9.pop();
    exer9.forEach((exer, index) => {
        console.log(exer.textContent + " se trouve à l'index : " + index);
    })


})