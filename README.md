# Checkpoint JavaScript : boucles for et while

Mes solutions aux 3 exercices sur les boucles en JavaScript.

| Fichier | Exercice | Notions |
|---|---|---|
| `exercice1.js` | Analyser une série de nombres | boucle `for`, modulo `%`, compteurs et sommes |
| `exercice2.js` | Une caisse | boucle `while` avec valeur d'arrêt (0), remise |
| `exercice3.js` | Notes d'une classe | `for` + `while` pour vérifier les saisies, mentions, moyenne |

## Comment tester

1. Ouvrir `index.html` dans un navigateur.
2. Cliquer sur le bouton de l'exercice.
3. Répondre aux questions (`prompt`). Les résultats s'affichent dans une alerte et dans la console (F12).

## Exemples testés

**Exercice 1** : N = 6
```
Somme de tous les nombres : 21
Nombre de multiples de 3 : 2
Somme des nombres pairs : 12
```

**Exercice 2** : saisies 40, -5, 70, 0
```
Nombre d'articles : 2
Total avant remise : 110
Remise : 11
Montant à payer : 99
```

**Exercice 3** : 3 étudiants avec 12, 8 et 16
```
Moyenne de la classe : 12
Nombre d'étudiants ayant réussi : 2
Pourcentage de réussite : 66.67 %
```

## Ce que j'ai appris

- `for` quand on sait combien de fois on répète, `while` quand on ne le sait pas.
- `i % 2 === 0` permet de savoir si un nombre est pair.
- Un `while` est pratique pour redemander une saisie tant qu'elle n'est pas correcte.
- Il faut redemander le prix **à la fin** de la boucle `while`, sinon la boucle ne s'arrête jamais.
