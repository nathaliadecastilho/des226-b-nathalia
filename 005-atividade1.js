let entrada = require("prompt-sync")();

let nome = "Nathália"; 
let profissao = "Desenvolvedora"; 
let anoNascimento = 1994;

let funcao = () => console.log("Oi"); 

console.log("Tipos de variáveis");
console.log("Variável: nome:" + typeof nome);
console.log("Variável: profissao:" + typeof profissao);
console.log("Variável: anoNascimento:" + typeof anoNascimento);

let nomeDigitado;
let profissaoDigitada;
let anoNascimentoDigitado;

console.log();

nomeDigitado = entrada("Digite seu nome: ");
profissaoDigitada = entrada("Qual sua profissão? ");
anoNascimentoDigitado = entrada("Em que ano você nasceu? ");

console.log("Nome: " + nomeDigitado + " - Tipo: " + typeof nomeDigitado);
console.log("Profissão: " + profissaoDigitada + " - Tipo: " + typeof profissaoDigitada);
console.log("Ano de Nascimento: " + anoNascimentoDigitado + " - Tipo: " + typeof anoNascimentoDigitado);    
