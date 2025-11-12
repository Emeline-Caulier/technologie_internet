const image = document.querySelector('#img');
//console.log(image['src']);
console.log(image.dataset.auteur);

console.log("INPUT");
const ville = document.getElementById("ville");
console.log("Ville : " + ville.value);
console.log("id : " + ville.id);
console.log("cp : " + ville.dataset.cp);
console.log("Département : " + ville.dataset.dept);


const fruits = document.querySelectorAll(".prix");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].dataset.suppl);
    console.log(fruits[i].textContent);
}