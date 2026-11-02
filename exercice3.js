// Exercice 3 - Notes d'une classe avec for et while

// 1. Nombre d'étudiants : on redemande tant que c'est <= 0
let nbEtudiants = Number(prompt("Combien d'étudiants dans la classe ?"));

while (nbEtudiants <= 0) {
  nbEtudiants = Number(prompt("Erreur ! Entrez un nombre d'étudiants plus grand que 0 :"));
}

let sommeNotes = 0;
let nbReussite = 0;

// 2. Boucle for pour passer d'un étudiant à l'autre
for (let i = 1; i <= nbEtudiants; i++) {
  // 3. On redemande la note tant qu'elle n'est pas entre 0 et 20
  let note = Number(prompt("Note de l'étudiant " + i + " (sur 20) :"));

  while (note < 0 || note > 20) {
    note = Number(prompt("Note invalide ! Entrez une note entre 0 et 20 pour l'étudiant " + i + " :"));
  }

  // 4. La mention
  let mention;
  if (note < 10) {
    mention = "Insuffisant";
  } else if (note < 14) {
    mention = "Passable";
  } else if (note < 16) {
    mention = "Bien";
  } else {
    mention = "Très bien";
  }
  console.log("Étudiant " + i + " : " + note + "/20 - " + mention);

  sommeNotes = sommeNotes + note;

  // 6. On compte ceux qui ont 10 ou plus
  if (note >= 10) {
    nbReussite = nbReussite + 1;
  }
}

// 5. Moyenne et 7. pourcentage de réussite
let moyenne = sommeNotes / nbEtudiants;
let pourcentage = (nbReussite / nbEtudiants) * 100;

console.log("Moyenne de la classe : " + moyenne);
console.log("Nombre d'étudiants ayant réussi : " + nbReussite);
console.log("Pourcentage de réussite : " + pourcentage.toFixed(2) + " %");

alert(
  "Moyenne de la classe : " + moyenne + "\n" +
  "Nombre d'étudiants ayant réussi : " + nbReussite + "\n" +
  "Pourcentage de réussite : " + pourcentage.toFixed(2) + " %"
);
