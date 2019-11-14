 /*global console*/ /* eslint no-console: "off" */
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
var n = prompt("Choisis un chiffre");
let pyramid;
let compt = 1;
while (n > 0){
  pyramid = "";
  let i = 1;
  while (i < n){
    pyramid = pyramid + " ";
    i++;
  }
  i = 0;
  while (i < compt){
    pyramid = pyramid + "#";
    i++;
  }
  console.log(pyramid);
  compt++;
  n--;
}



//
//console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
//var n = prompt("Choisis un chiffre");
//
//var x = "";
//for (i= 1; i<=n; i++){
//x = x+"#";
// 
//console.log(x)
//}
// 

