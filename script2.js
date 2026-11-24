/*const myList = [1, 5, 8, 9, 6, 3, 2, 1, 5, 5, 5, 5]
myList.find(element => element === 5);
console.log(myList.filter(element => element === 5 || element === 8))

const mObject = {
    cle1: "ceci est ma clé 1",
    cle2: "ceci est ma deuxième clé",
    afficherCles: function() {
        console.log
    }
}
*/

const fruits = ["pomme", "framboise", "myrtille", "poire"]

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

fruits.forEach(element => {
    console.log(element)
});

// Exercice 3 :
const myTab = new Array(3, 5, 7, 9, 11)
const myDoubleTab = myTab.map(element => element*2) // doubler chaque élément
console.log(myDoubleTab)
const bigNums = myTab.filter(element => element > 10)
console.log(bigNums)

// Calculer la somme de chaque tableau
let somme_tab_1 = 0
let somme_tab_2 = 0

for(let i = 0; i < myDoubleTab.length; i++) {
    somme_tab_1 += myDoubleTab[i]
}

for(let i = 0; i < bigNums.length; i++) {
    somme_tab_2 += bigNums[i]
}

console.log(somme_tab_1, somme_tab_2)