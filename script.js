// Complément Exo 1 :
/* 
function demanderAge() {
    const saisie = prompt("Vous devez avoir au moins 18 ans. Quel âge avez-vous ? ");

    if (saisie === null || saisie === "") {
        return "Saisie vide ou annulée" + demanderAge();
    }

    if (isNaN(saisie)) {
        return "Vous n'avez pas entré un nombre. Veuillez réessayer." + demanderAge();
    } else if (saisie < 0) {
        return "Vous avez entré un nombre négatif. Veuillez réessayer." + demanderAge();

    } else if (saisie >= 18) {
        return "Vous êtes majeur et avez le droit d'entrer sur ce site bien douteux.";
    } else {
        return "Vous êtes mineur et n'avez pas le droit d'entrer sur ce site bien douteux.";
    }
}   

console.log(`${demanderAge()}`);

const arrowFunc = (param1, param2) => param1 + param2;
 */

// TP II Exo 1 :
/* 
function TVA() {
    const HT = prompt("Veuillez saisir un prix unitaire : ")
    const TAUX_TVA = prompt("Saisissez un taux de TVA : ")
    const nb_articles = prompt("Saisissez un nombre d'articles à acheter : ")
    const TOTAL_HT = HT * nb_articles
    const final_price = Number(TOTAL_HT) * (1 + Number(TAUX_TVA))
    return final_price
}

console.log(`${TVA()}`)
*/

// Complément Exo 2 :
/*
const date = [16, 11, 2026];
const jour = date[0]
const mois = date[1]
const annee = date[2]
console.log("Nous sommes le ", jour, mois, annee)
*/


// Complément Exo 2 :
/*
function fruits(liste) {
    for (const fruit of liste) {
        console.log(fruit)
    }
}

date(["pomme", "banane", "fraise"])
*/

// TP II Exo 2 et 3 :
/*
function permutations(first_value, second_value) {
    first_value, second_value = second_value, first_value
}

function permutations_different(value1, value2) {
    const stock_value1 = value1
    const stock_value2 = value2
    value1 = stock_value2
    value2 = stock_value1
    return (value1, value2)
}

function permut_plus_minus(val1, val2) {
    val1 = Number(val1)
    val2 = Number(val2)
    val1 = val1 + val2
    val2 = val2 - val1
    val1 = val1 - val2

    return (val1, val2, typeof val1, typeof val2)
}
*/

// Exo 3 :
/*
function echange_trois_valeurs(x, y, z) {
    x = Number(x)
    y = Number(y)
    z = Number(z)

    const stock_y = y

    y = z, z = x, x = stock_y
    return [x, y, z, typeof x, typeof y, typeof z]
}

console.log(echange_trois_valeurs(4, 8, 16))
*/

// Exo 4 : fonction fléchée aire du rectangle 
const aireR = (longueur, largeur) => (longueur * largeur)