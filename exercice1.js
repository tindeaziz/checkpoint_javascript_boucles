// Exercice 1 - Analyser une série de nombres avec for

let n = Number(prompt("Entrez un nombre entier N (plus grand que 0) :"));

let somme = 0;
let nbMultiplesDe3 = 0;
let sommePairs = 0;

for (let i = 1; i <= n; i++) {
  // 1. et 2. On affiche le nombre et s'il est pair ou impair
  if (i % 2 === 0) {
    console.log(i + " est pair");
    // 5. Somme des nombres pairs
    sommePairs = sommePairs + i;
  } else {
    console.log(i + " est impair");
  }

  // 3. Somme de tous les nombres
  somme = somme + i;

  // 4. On compte les multiples de 3
  if (i % 3 === 0) {
    nbMultiplesDe3 = nbMultiplesDe3 + 1;
  }
}

console.log("Somme de tous les nombres : " + somme);
console.log("Nombre de multiples de 3 : " + nbMultiplesDe3);
console.log("Somme des nombres pairs : " + sommePairs);

alert(
  "Somme de tous les nombres : " + somme + "\n" +
  "Nombre de multiples de 3 : " + nbMultiplesDe3 + "\n" +
  "Somme des nombres pairs : " + sommePairs
);
