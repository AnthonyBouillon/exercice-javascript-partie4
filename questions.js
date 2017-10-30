/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
 //compte la longueur de caractère
var tailleString = function (texte) {
    tailleString = texte.length;
    return tailleString;
}
//remplace la première lettre 'e' par un espace
var remplaceECar = function (texte) {
    remplaceEcar = texte.replace('e' , ' ');
    return remplaceEcar;
}
// concatène les chaines de caractères du texte1 et texte2
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
//Affiche le 5ème caractère de la chaine ( 1 par 1)
var afficherCar5 = function (texte) {
    afficheCar5 = texte.charAt(4);
    return afficheCar5;
}
// Affiche les 9 premiers caractères
var afficher9Car = function (texte) {
    afficher9Car = texte.substring(0,9);
    return afficher9Car;
}
//Affiche la chaine de caractère en majuscule
var majusculeString = function (texte) {
    majusculeString = texte.toUpperCase();
    return majusculeString;
}
// Affiche la chaine de caractère en minuscule
var minusculeString = function (texte) {
    minusculeString = texte.toLowerCase();
    return minusculeString;
}
//Supprmer les espaces avant et après la chaine de caractère
var SupprEspaceString = function (texte) {
    SupprEspaceString = texte.trim(' ', '')
    return SupprEspaceString;
}
//Afficher true si le parametre d'entrée de la fonction est de type string
var IsString = function (texte) {
  //typeof = vérifié son type ( chaine ou autre) donc si texte est égale a 'string ' donc une chaine alors retourn true
    IsString = typeof texte == 'string';
    return IsString;
}
// Afficher l'extension du fichier
var AfficherExtensionString = function (texte) {
    AfficherExtensionString = texte.substr(15,17);
    return AfficherExtensionString;
}
 //Compter le nombre d'espace dans la chaine
var NombreEspaceString = function (texte) {
    NombreEspaceString = texte.split(' ').length - 1;
    return NombreEspaceString;
}
// Inverser la chaine de caractère
var InverseString = function (texte) {
  //Tu sépare, tu mélange et tu join les deux morceaux
    InverseString = texte.split('').reverse().join('');
    return InverseString;
}

/*Exercices sur les nombres et les caluls mathématiques*/
  //Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
var calculPuissance = function (x, y) {
    calculPuissance = Math.pow(x, y)
    return calculPuissance;
}
//Afficher la valeur absolue d'un nombre
var valeurAbsolue = function (nombre) {
    valeurAbsolue = Math.abs(nombre);
    return valeurAbsolue;
}
 //Afficher les valeurs absolues de plusieurs nombres
var valeurAbsolueArray = function (array) {
    valeurAbsolueArray = array.map(Math.abs);
    return valeurAbsolueArray;
}
//Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
var sufaceCercle = function (rayon) {
    var calcul = (rayon * rayon) * Math.PI;
    // arrondir à l'entier le plus proche
    var result = Math.round(calcul);
    return result;
}
//Calculer l'hypothènuse d'un triangle rectangle
var hypothenuse = function (ab, ac) {
    hypothenuse = Math.hypot(ab, ac);
    return hypothenuse;
}
//Calculer l'Imc
var calculIMC = function (poids, taille) {
  var calcul = poids / Math.pow(taille, 2);
  // prendre deux chiffre après la virgule
  var calcul = calcul.toFixed(2);
  var result = parseFloat(calcul);
    return result;
}
