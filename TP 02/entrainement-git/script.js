// TP 02, partie2, ex1

let prix = prompt("Quel est le prix HT ?")
let TVA = prompt("Quel est la TVA") /100
let nombres = prompt("Combien d'articles")




let calcul = (prix, TVA, nombres) => {
    return (prix * (1 + TVA)) * nombres
}
calcul(prix, TVA, nombres)
console.log(calcul(prix, TVA, nombres))

//Complément Ex1 : Majeur ou mineur











