 /*global console*/ /* eslint no-console: "off" */


console.log("De quel nombre veux-tu calculer la factorielle ?")
n = prompt("Choisis un chiffre")
function factorial(n) {
	//0! = 1, 1! = 1
	if(n > 0 && n <= 1) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}
//console.log(factorial(n));
console.log("Le résultat est de"+" "+factorial(n));