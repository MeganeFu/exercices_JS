 /*global console*/ /* eslint no-console: "off" */

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// est ce que les livres ont été empruntés ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
for(let i=0; i<books.length; i++) {
	if (books[i].rented > 0)
	
console.log("oui");
};

//livre le plus emprunté
console.log("Quel est livre le plus emprunté ?")
//for(let i=0; i<books.length; i++){
//
//Math.max.apply(Math, books.map(function(o) { return o.rented; }))
  const max = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current)
  console.log('max :', max)


//livre le moins emprunté
console.log("Quel est le livre le moins emprunté ?")

const min = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current)
console.log('min :', min)

// trouver le livre avec id
console.log("Trouve le livre avec l'ID: 873495")

var found = books.find(book => book.id == 873495);
console.log(found);


//Supprime le livre avec l'ID: 133712 
console.log("Supprime le livre avec l'ID: 133712 ")
  var result = books.filter(function (obj) {
    if (obj.id !== 133712) {
      return obj
    }
  })
	  console.log('result :', result);


// classer par ordre alphabétique 
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")

function sort(a,b)
{
	if (a.title < b.title) return -1;
	else if (a.title == b.title) return 0;
	else return 1;
}
 
result.sort(sort);
console.log(result);


