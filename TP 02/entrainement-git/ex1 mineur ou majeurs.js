const age = prompt("Quel âge as-tu ?")

if (age === null){
    console.log("Tu as annulé")
}

if (age < 0|| age===""||isNaN(Number(age))){
    console.log("Tu as mis un nombre négatif")
}else {
        if (age > 17){
            console.log("Tu es majeur")
        } else {
        console.log("Tu es mineur")
    }
}