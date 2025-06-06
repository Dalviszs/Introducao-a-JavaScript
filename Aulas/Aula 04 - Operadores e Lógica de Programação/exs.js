
// Caso 1:
//===============================================================================================
// Variáveis:
let idade = 20;               // a idade da pessoa
let assinaturaPaga = true;    // se tem assinatura paga ou não

// Checando condições:
let podeEntrar = (idade >= 18) && (assinaturaPaga == true);

// Resultado:
console.log(podeEntrar); // true se a pessoa pode entrar, false se não

// Caso 2:
//===============================================================================================

let idade2 = 20;            // idade da pessoa
let documentoValido = true; // documento válido ou não

let podeComprar = (idade2 >= 18) && (documentoValido == true);

console.log(podeComprar);  // true se pode comprar, false se não

// Caso 3:
//===============================================================================================
let valorCompra = 80;     // valor total da compra
let clienteVip = true;    // se a pessoa é cliente VIP ou não

let podeUsarCupom = (valorCompra > 100) || (clienteVip == true);

console.log(podeUsarCupom); // true se pode usar o cupom, false se não
 
// Caso 4:
//===============================================================================================

let ehIdosa = false;          // a pessoa é idosa?
let temDeficiencia = true;    // a pessoa tem deficiência?

let podeEstacionar = (ehIdosa == true) || (temDeficiencia == true);

console.log(podeEstacionar);  // true se pode usar a vaga, false se não

// === ou 
let idade4 = 65;              // idade da pessoa
let temDeficiencia4 = true;    // a pessoa tem deficiência?

let ehIdosa4 = idade4 > 60;     // pessoa é idosa se a idade for maior que 60

let podeEstacionar4 = (ehIdosa4 == true || temDeficiencia4 == true);

console.log(podeEstacionar4);  // true se pode usar a vaga, false se não


// Caso 5:
//===============================================================================================


let temControle = false;             // a pessoa tem controle?
let consoleConectadoNaTv = true;     // o console está conectado na TV?

let podeJogar = (temControle == true) || (consoleConectadoNaTv == true);

console.log(podeJogar);  // true se pode jogar, false se não


// 6
//===============================================================================================

let estaLogado = true;           // o usuário está logado?
let ehAdministrador = false;     // o usuário é administrador?

let temAcesso = (estaLogado == true) && (ehAdministrador == true);

console.log(temAcesso);  // true se pode acessar, false se não



// 7
//===============================================================================================


let temSenha = true;              // a pessoa tem a senha?
let estaNoAlcance = true;         // a pessoa está dentro do alcance da rede?

let podeAcessarWiFi = (temSenha == true) && (estaNoAlcance == true);

console.log(podeAcessarWiFi);  // true se pode acessar o Wi-Fi, false se não

// Ex7 b


// Entradas de dados diretamente no código
let NF = 6;  // Exemplo: Nota final
let NR = 8;  // Exemplo: Nota de recuperação
let T1 = 7;  // Nota do trabalho 1
let T2 = 9;  // Nota do trabalho 2
let T3 = 5;  // Nota do trabalho 3

// Lógica de aprovação
let trabalhosAprovados = (T1 > 6) + (T2 > 6) + (T3 > 6); // Soma de trabalhos aprovados
let aprovado = (NF > 7) || (NR >= 8 && trabalhosAprovados >= 2);

// Exibição do resultado usando operadores
console.log(aprovado); // Exibe true (aprovado) ou false (reprovado)

//8 
//===============================================================================================


let renda = 2500;                 // renda da pessoa
let nomeLimpo = true;            // o nome está limpo no sistema de crédito?

let podeFazerEmprestimo = (renda > 2000) && (nomeLimpo == true);

console.log(podeFazerEmprestimo);  // true se pode fazer o empréstimo, false se não
 

//9 //===============================================================================================

let valorCompra9 = 120;           // valor da compra
let ehClienteVIP = true;         // a pessoa é cliente VIP?

let temDesconto = (valorCompra > 150) || (ehClienteVIP == true);

console.log(temDesconto);  // true se tem direito ao desconto, false se não

//10
//===============================================================================================

let idade10 = 17;                  // idade da pessoa
let temAutorizacaoPais = true;   // a pessoa tem autorização dos pais?

let podeParticiparEvento = (idade > 18) || (temAutorizacaoPais == true);

console.log(podeParticiparEvento);  // true se pode participar do evento, false se não


//11 
//===============================================================================================
 
let pagouValorCompleto = true;        // o cliente pagou o valor completo?
let temComprovantePagamento = true;   // o cliente tem o comprovante de pagamento?

let podeRetirarProduto = (pagouValorCompleto == true) && (temComprovantePagamento == true);

console.log(podeRetirarProduto);  // true se pode retirar o produto, false se não


//12
//===============================================================================================








verificando = ('Gato' === 'gato')
console.log(verificando)


// Ex5

let nome = "Lais";
let anoNascimento = 2005;
let anoAtual = 2025;

// Cálculos:
let idade6 = anoAtual - anoNascimento;
let maiorDeIdade = idade6 >= 18;
let idadeEm2050 = 2050 - anoNascimento;

// Exibindo os resultados:
console.log("Nome:", nome);
console.log("Idade agora:", idade6);
console.log("Maior de idade:", maiorDeIdade);
console.log("Idade em 2050:", idadeEm2050);
//++++++++++++++

// Valores de exemplo
let a = true;
let b = false;

console.log("Operadores Lógicos em JavaScript");

// AND (&&) - Retorna true se ambos forem true
console.log("true && true =>", true && true);     // true
console.log("true && false =>", true && false);   // false
console.log("a && b =>", a && b);                 // false

// OR (||) - Retorna true se pelo menos um for true
console.log("true || false =>", true || false);   // true
console.log("false || false =>", false || false); // false
console.log("a || b =>", a || b);                 // true

// NOT (!) - Inverte o valor booleano

console.log("!true =>", !true);                   // false
console.log("!false =>", !false);                 // true
console.log("!a =>", !a);                         // false
console.log("!b =>", !b);                         // true

// Combinações mais complexas
console.log("!(a && b) =>", !(a && b));           // true
console.log("(a || b) && !b =>", (a || b) && !b); // true
