//---------------------------------------------------------------------------------------------------------------------//
//Cours du 8 octobre

//Introduction au objet JSON

//a)Créez un objet personne dont les champs sont nom et age
// puis affichez cet objet dans la console de cette manière :
// "La personne s'appelle <…> et elle a <….> ans"
let personne =
    {
        "nom": "Dupont",
        "age": 25
    }
console.log(`La personne s'appelle ${personne.nom} et elle a ${personne.age} ans`)


//b)Créez un tableau personnes, dans lequel vous copierez l'objet créé ci-dessus.
// Affichez dans la console
let personnes = [];
//personnes = [...personnes, personne]; ou :
personnes.push(personne)
console.log(personnes);


//c)Ajouter un nouvel objet au tableau personnes
personnes.push({"nom": "Louis", "age": 20});
console.log(personnes);


//d)Reproduisez cette page html en plaçant les valeurs en dur dans les zones de saisie :
//Puis récupérez les valeurs du formulaire et incorporez-les au tableau d'objets, que vous afficherez dans la console :
const nouveau_nom = document.querySelector("#nom").getAttribute("value")
console.log("Le nouveau nom est " + nouveau_nom);
const nouveau_age = document.querySelector("#age").getAttribute("value")
console.log("Le nouvel age  est " + nouveau_age);
personnes.push({"nom": nouveau_nom, "age": nouveau_age});
console.log(personnes);

//--------------------------------------------------------------------------------------------------------------------------//
// Cours du 1er octobre

const pays = ["Belgique", "France", "Allemagne", "Royaume-Uni", "Italie"];
//Destructuring : prélever
const [p1, p2] = pays;
console.log("p1 = " + p1 + " et p2 = " + p2 + " ");
const [, , p3, p4] = pays;
console.log("p3 = " + p3 + " et p4 = " + p4 + " ");

//spread operator
console.log("Pays 1 = " + pays);
const pays2 = [...pays];
console.log("Pays 2 = " + pays2);
const pays3 = ["Espagne", "Portugal", "Luxembourg"];
const pays5 = [...pays, pays3]
console.log("Pays 5 = " + pays5);
const pays6 = [...pays, "Pays-Bas"];
console.log("Pays 6 = " + pays6);


//Le tableau des pays
const tab = document.querySelectorAll('.td_pays');
for (let i = 0; i < pays.length; i++) {
    tab[i].textContent = pays[i];
}

//Le tableau de nom
let noms = ['Marie', 'Louis', 'Sophie', 'Kevin', 'Léa', 'Andy'];

//Afficher tel quel :
const origine = document.querySelector("#origine");
origine.textContent = noms.join('  * * *  ');

//Tableau trié :
noms.sort();
const trie = document.querySelector('#trie');

//Nom ajouté :
noms.push("Camille");
const ajout = document.querySelector('#nom_ajout');
ajout.textContent = noms.join('  * * *  ');

//Tableau sans troisième nom supprimé :
noms.splice(2, 2);
const sanstroisieme = document.querySelector('#supp_troisieme');
sanstroisieme.textContent = noms.join('  * * * ');

//Les noms entre les indices 2 et 4 :
const nomentre = document.querySelector("#entre_indice");
nomentre.textContent = noms[2] + " " + noms[3] + " " + noms[4];

//Deux ajouts en début
trie.textContent = noms.join('  * * *  ');
noms.unshift("Ricky", "Mario");
const ajout2 = document.querySelector("#deux_ajouts_debut");
ajout2.textContent = noms.join('  * * *  ');

//Supprimer le dernier prénom du tableau :
noms.pop();
const supDernier = document.querySelector("#suppDernier");
supDernier.textContent = noms.join('  * * *  ');

//On cherche :
const rech = document.querySelector("#indice")
rech.textContent = "Indice de Marie : " + noms.indexOf("Marie");

//Le nom cherché est il dans la liste
const nomarechercher = document.querySelector("#recherche");
nomarechercher.textContent = noms.includes("Andy");
console.log(nomarechercher);
