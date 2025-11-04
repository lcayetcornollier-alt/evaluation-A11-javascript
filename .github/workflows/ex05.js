// ex05.js

function isEnoughMoney(price, wallet) {
    let a = wallet - price
    if (a < 0){
        return false
    }
    return true 
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true