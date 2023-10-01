let resultUserData = getUserData(100, 18)
let resultRankUser = ""

function getUserData(numA, numB) {
    let calcUserData = numA - numB
    return calcUserData
}

if (resultUserData <= 0) {
    console.log("O usuário tem um saldo de 0 vitórias. Por isso, ainda não tem patente definida.")
} else if ((resultUserData > 0) && (resultUserData <= 10)) {
    resultRankUser = "Ferro"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if ((resultUserData > 10) && (resultUserData <= 20)) {
    resultRankUser = "Bronze"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if ((resultUserData > 20) && (resultUserData <= 50)) {
    resultRankUser = "Prata"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if ((resultUserData > 50) && (resultUserData <= 80)) {
    resultRankUser = "Ouro"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if ((resultUserData > 80) && (resultUserData <= 90)) {
    resultRankUser = "Diamante"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if ((resultUserData > 90) && (resultUserData <= 100)) {
    resultRankUser = "Lendário"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
} else if (resultUserData > 100) {
    resultRankUser = "Imortal"
    console.log("O Herói tem um de saldo de " + resultUserData + " vitórias. Portanto, sua patente atual é: " + resultRankUser + ".")
}