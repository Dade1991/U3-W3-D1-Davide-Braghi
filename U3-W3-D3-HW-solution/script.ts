// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali sono: string, number, boolean, null, undefined, any.

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let nome: string = "Mario";
let eta: number = 25;
let stoStudiando: boolean = true;

// 3) Tipizza il parametro della seguente funzione
const greet = (name: string) => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolaIVA = function (prezzo: number): number {
  return prezzo * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concatenaEMisura = function (str1: string, str2: string): number {
  return (str1 + str2).length;
};

// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di accettare più tipi, si scrive usando il simbolo |
let unionVar: string | number;

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let multipleTypesVar: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili.
const numbersInferred = [1, 2, 3];
const numbersTyped: number[] = [1, 2, 3];
// oppure
const numbersTypedGeneric: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const myTuple: [string, string, string, number, number] = ["HTML", "CSS", "JS", 3, 4];

// 12) Qual è la differenza tra type e interface?
// type può essere usato per alias di tipi primitivi e union types, mentre interface è specifico per definire la forma degli oggetti.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age"
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente {
  email: string;
  telefono?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  nome: string;
  voto: number;
}

let classe: Studente[] = [
  { nome: "Mario", voto: 8 },
  { nome: "Luigi", voto: 7 }
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  numeroPosti: number;
  carburante: "benzina" | "diesel" | "elettrico" | "metano" | "gpl";
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Panda",
  numeroPosti: 5,
  carburante: "benzina"
};

// 18) Cosa sono i Generics in TypeScript?
// Sono un modo per creare interfacce flessibili che possono accettare diversi tipi di dati
// al momento del loro utilizzo.

// È possibile avere più tipi generici in un'interfaccia?
// Sì, basta rispettarne l'ordine e posizionare i singoli parametri dove si vuole che si applichino:
interface Address<C, Z> {
  street: string;
  country: C;
  zipcode: Z;
}

// 20) Crea un'interfaccia generica per una risposta API.
interface APIResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
