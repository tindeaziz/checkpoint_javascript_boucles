// Exercice 2 - Une caisse avec while

let nbArticles = 0;
let total = 0;

// 1. On demande un premier prix, puis on continue tant que ce n'est pas 0
let prix = Number(prompt("Prix de l'article (0 pour terminer) :"));

while (prix !== 0) {
  if (prix < 0) {
    // 2. Prix négatif : message d'erreur, on ne le compte pas
    console.log("Erreur : le prix " + prix + " est négatif, il n'est pas pris en compte.");
    alert("Erreur : un prix ne peut pas être négatif.");
  } else {
    // 3. Article valide
    nbArticles = nbArticles + 1;
    total = total + prix;
  }

  prix = Number(prompt("Prix de l'article (0 pour terminer) :"));
}

// 6. Aucun article valide
if (nbArticles === 0) {
  console.log("Panier vide");
  alert("Panier vide");
} else {
  // 4. Remise de 10 % si le total est de 100 ou plus
  let remise = 0;
  if (total >= 100) {
    remise = total * 0.1;
  }
  let aPayer = total - remise;

  // 5. Affichage
  console.log("Nombre d'articles : " + nbArticles);
  console.log("Total avant remise : " + total);
  console.log("Remise : " + remise);
  console.log("Montant à payer : " + aPayer);

  alert(
    "Nombre d'articles : " + nbArticles + "\n" +
    "Total avant remise : " + total + "\n" +
    "Remise : " + remise + "\n" +
    "Montant à payer : " + aPayer
  );
}
