//Exercice 1.A

const annee = number = 2020;
const annee2 = annee + 10;
const annee_initiale = document.querySelector('#annee1');
annee_initiale.textContent = annee;
const annee_plus_5 = document.querySelector('#annee2');
annee_plus_5.textContent = annee + 5;


const annee3 = document.querySelector('#annee3').textContent;
console.log(annee3);
//text content pour aller chercher dedans ou mettre dedans
const annee4 = document.querySelector('#annee4');
const annee5 = parseInt(annee3) + 2;
annee4.textContent = annee5;

//Exercice 1.B
const longueur = document.querySelector('#longueur').textContent;
const largeur = document.querySelector('#largeur').textContent;
const perimetre = document.querySelector('#perimetre');
const calcule_perimetre = (parseInt(largeur) + parseInt(longueur)) * 2;
perimetre.textContent = calcule_perimetre;
const aire = document.querySelector('#aire');
const aire_calcule = parseInt(largeur) * parseInt(longueur);
aire.textContent = aire_calcule;
