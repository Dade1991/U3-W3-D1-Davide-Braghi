// 1) Quali sono i tipi primitivi principali in TypeScript?
// I principali primitivi in TS sono uguali identici a quelli di JS con l'aggiunta di Any & Never (Never non l'abbiamo ancora vista)
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var firstName = "Davide";
var myAge = 33;
var studingTS = true;
console.log(firstName);
console.log(myAge);
console.log(studingTS);
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Stefano!"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3)); // torna un "number"
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var priceWithVAT = function (price) {
    var VAT = 1.22;
    return price * VAT;
};
console.log(priceWithVAT(10));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var newFunction = function (str1, str2, str3) {
    return (str1 + str2 + str3).length;
};
console.log(newFunction("Ciao ", "ancora ", "Stefano!"));
// 7) Cos'è un Type Union e come si scrive?
// TYPE UNION permette di creare una unione di diversi TIPI al fine di descrivere meglio la TIPIZZAZIONE di alcune porzioni di codice.
var myVar = "Questa è una stringa!";
console.log('LOG di "myVar" a riga 56, ovvero:', myVar);
myVar = 100;
console.log('LOG di "myVar" a riga 60, dopo averla ridichiarata:', myVar);
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myTypeUnionVar;
myTypeUnionVar = 50;
console.log('LOG di "myTypeUnionVar" a riga 69, ovvero:', myTypeUnionVar);
myTypeUnionVar = null;
console.log('LOG di "myTypeUnionVar" a riga 71, ovvero:', myTypeUnionVar);
myTypeUnionVar = undefined;
console.log('LOG di "myTypeUnionVar" a riga 73, ovvero:', myTypeUnionVar);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers_A = [1, 2, 3];
console.log(numbers_A);
var numbers_B = [1, 2, 3];
console.log(numbers_B);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple = [
    "Ciao ",
    "vorrei essere bravo ",
    "con TypeScript!",
    5,
    10,
];
console.log(myTuple);
var whoIs = {
    firstName: "Davide",
    lastName: "Braghi",
    age: 33,
};
console.log(whoIs);
var insertContactDetails = {
    email: "dade91@msn.com",
    phoneNumber: 3397474745,
};
console.log(insertContactDetails);
var studendsArray = [
    { name: "Davide", score: 4 },
    { name: "Clara", score: 10 },
    { name: "Frank", score: 8 },
];
console.log(studendsArray);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    brand: "Volkswagen",
    model: "Golf GTD",
    yearOfProdction: 2018,
    stillInProduction: false,
    typeOfFuel: "Gasoline",
    numberOfDoors: 5,
};
console.log(myAuto);
// 18) Cosa sono i Generics in TypeScript?
// Un GENERIC è un TIPO (string, number, boolean, etc.) che viene passato come argomento ma per una interfaccia al posto che ad una funzione.
// 19) È possibile avere più tipi generici in un'interfaccia?
// Si possiamo utilizzare praticamente infiniti GENERICS (Generalmente si utilizzano le parole in maiuscolo dell'alfabeto A, B, C, D, E, etc.)
// 20) Crea un'interfaccia generica per una risposta API.
