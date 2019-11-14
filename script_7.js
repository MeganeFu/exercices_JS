 /*global console*/ /* eslint no-console: "off" */


answer = prompt("test")


//message vide
if (answer == ""){
	console.log("t'es en PLS ?")}

//message avec fortnite
else if (answer.includes("fortnite")){
	console.log("on s' fait une partie soum-soum ?")}

//message en majuscule
else if (answer == answer.toUpperCase()) {
	console.log("Pwa, calme-toi...")
}

//message qui finit par ? 

// sans condition
else { console.log("balek")};