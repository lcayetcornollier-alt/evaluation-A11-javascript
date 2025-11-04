// ex06.js

function getReduction(price, age) {
	if (age > 25) {
		return price;
	}
	if (age <= 25) {
		let a = price / 100;
		return a * 30;
	}
	if (age <= 18) {
		let a = price / 100;
		return a * 50;
	}
	if (age <= 5) {
		let a = price / 100;
		return a * 100;
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
