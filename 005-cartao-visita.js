let entrada = require("prompt-sync")();

let nome = entrada("Digite seu nome: ");
let profissao = entrada("Digite sua profissão: ");
let anoNascimento = entrada("Em que ano você nasceu?");

console.log("Nome: " + nome);
console.log("Profissão: " + profissao);
console.log("Ano de Nascimento: " + anoNascimento);

console.log("Nome:" + typeof nome);
console.log("Profissão:" + typeof profissao);
console.log("Ano de Nascimento:" + typeof anoNascimento);

entrada();
