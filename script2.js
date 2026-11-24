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

console.log(somme_tab_1, somme_tab_2);

// Exercice 4 :
const students = [
    {nom: "Jean", age: 18, note: 18}, 
    {nom: "Fabrice", age: "on sait pas", note: 13}, 
    {nom: "Bejamin", age: 18, note: 16}
]

// nom et note au-dessus de 12 :
students.forEach(student => {
    if (student.note > 12) {
        console.log(student)
    }
});

let nameOfStudents = []
students.forEach(student => {
    nameOfStudents.push(student.nom)
});
console.log(nameOfStudents)

// Exercice 5 :
const supinfoModule = {
    nom: "1WEBD",
    professeurs: "Mme Martin",
    students: students,
    addStudents: function(nom, age, note) {
        this.students.push({nom: nom, age: age, note: note})
    },
    afficherMoyenne: function() {
        const nb_notes = this.students.length;
        let somme_notes = 0
        this.students.forEach(student => {
            somme_notes += student.note
        });
        
        return somme_notes / nb_notes;
    }
};