// ex04.js

function isSumEven(a, b) {
    let l = a + b
	if (l % 2 == 0 ) {
        return true 
    }
    return false
}

console.log(isSumEven(1, 3)); // Résultat attendu: true
console.log(isSumEven(1, 0)); // Résultat attendu: false
