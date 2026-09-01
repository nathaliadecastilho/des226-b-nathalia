let entrada = require("prompt-sync")();

let filme = entrada("Digite o nome do filme a ser avaliado:");
let nota = entrada("Que nota você dá para esse filme (0-10):");
let recomenda = entrada("Você recomendaria esse filme? (sim/não):");

// eu controlo o formato
let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim"? true : false;
let ehNull = numPaisesExibidos === null? "null" : "outra coisa";

console.log("");
console.log("----------------------");
console.log("bilheteria:" + typeof bilheteria);
console.log("numPaisesExibidos:" + typeof numPaisesExibidos);
console.log("notaInt:" + typeof notaInt);
console.log("recomendaBool:" + typeof recomendaBool);
// o retorno de um null é object

entrada();
