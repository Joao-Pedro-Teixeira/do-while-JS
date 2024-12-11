//EX1 
let alunos = [];
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome do aluno:");
    let idade = parseInt(prompt("Digite a idade do aluno:"));

    alunos.push({ nome, idade });

    continuar = prompt("Deseja cadastrar outro aluno? (sim/não)").toLowerCase() === 'sim';
}

console.log(alunos);

//EX2
continuar = true;
while (continuar) {
    let nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
    let nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
    let media = (nota1 + nota2) / 2;

    alert("Média das notas: " + media.toFixed(2));

    continuar = prompt("Deseja simular mais notas? (sim/não)").toLowerCase() === 'sim';
}

//EX3
let usuarioCorreto = "admin";
let senhaCorreta = "12345";
let loginFeito = false;

while (!loginFeito) {
    let usuario = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido!");
        loginFeito = true;
    } else {
        let continuar = prompt("Usuário ou senha incorretos. Tentar novamente? (sim/não)").toLowerCase();
        if (continuar === "não") {
            break;
        }
    }
}

//EX4
continuar = true;
while (continuar) {
    let numero = parseFloat(prompt("Digite o número:"));
    let expoente = parseInt(prompt("Digite o expoente:"));
    let resultado = Math.pow(numero, expoente);

    alert(`Resultado: ${numero} elevado a ${expoente} é ${resultado}`);

    continuar = prompt("Deseja calcular outra potência? (sim/não)").toLowerCase() === 'sim';
}

//EX5
let senhaValida = false;
while (!senhaValida) {
    let senha = prompt("Digite uma senha (mínimo 8 caracteres, letras e números):");

    if (senha.length >= 8 && /[a-zA-Z]/.test(senha) && /\d/.test(senha)) {
        alert("Senha válida!");
        senhaValida = true;
    } else {
        alert("Senha inválida. Tente novamente.");
    }
}

//EX6
continuar = true;
let totalNotas = 0;
let numNotas = 0;

while (continuar) {
    let nota = parseFloat(prompt("Digite uma nota:"));
    totalNotas += nota;
    numNotas++;

    continuar = prompt("Deseja adicionar mais uma nota? (sim/não)").toLowerCase() === 'sim';
}

let media = totalNotas / numNotas;
alert("Média das notas: " + media.toFixed(2));

//EX7
let numeroCorreto = Math.floor(Math.random() * 10) + 1;
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));

    if (palpite === numeroCorreto) {
        alert("Parabéns, você acertou!");
        acertou = true;
    } else {
        alert("Errado, tente novamente.");
    }
}

//EX8
let idadeValida = false;

while (!idadeValida) {
    let nome = prompt("Digite o nome do aluno:");
    let idade = parseInt(prompt("Digite a idade do aluno:"));

    if (idade >= 16 && idade <= 100) {
        alert(`Cadastro de ${nome} realizado com sucesso!`);
        idadeValida = true;
    } else {
        alert("Idade inválida. Tente novamente.");
    }
}

//EX9
let produtos = [];
continuar = true;

while (continuar) {
    let nomeProduto = prompt("Digite o nome do produto:");
    let quantidade = parseInt(prompt("Digite a quantidade em estoque:"));

    produtos.push({ nome: nomeProduto, quantidade });

    continuar = prompt("Deseja cadastrar outro produto? (sim/não)").toLowerCase() === 'sim';
}

console.log(produtos);

//EX10
continuar = true;
while (continuar) {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`Fatorial de ${numero} é ${fatorial}`);

    continuar = prompt("Deseja calcular outro fatorial? (sim/não)").toLowerCase() === 'sim';
}

//EX11
let saldo = 0;
continuar = true;

while (continuar) {
    let operacao = prompt("Digite a operação (depósito ou saque):").toLowerCase();
    let valor = parseFloat(prompt("Digite o valor:"));

    if (operacao === "depósito") {
        saldo += valor;
    } else if (operacao === "saque") {
        saldo -= valor;
    }

    alert("Saldo atual: " + saldo.toFixed(2));

    continuar = prompt("Deseja realizar outra operação? (sim/não)").toLowerCase() === 'sim';
}

//EX12
continuar = true;

while (continuar) {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;

    alert(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);

    continuar = prompt("Deseja converter outra temperatura? (sim/não)").toLowerCase() === 'sim';
}

//EX13
let total = 0;
continuar = true;

while (continuar) {
    let preco = parseFloat(prompt("Digite o valor do produto:"));
    total += preco;

    continuar = prompt("Deseja adicionar outro produto? (sim/não)").toLowerCase() === 'sim';
}

alert("Total da compra: R$ " + total.toFixed(2));

//EX14
continuar = true;

while (continuar) {
    let capital = parseFloat(prompt("Digite o capital:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros (%):")) / 100;
    let tempo = parseFloat(prompt("Digite o tempo (em anos):"));
    
    let juros = capital * taxa * tempo;
    let total = capital + juros;

    alert(`Valor final: R$ ${total.toFixed(2)}`);

    continuar = prompt("Deseja calcular outro valor? (sim/não)").toLowerCase() === 'sim';
}

//EX15
continuar = true;
let totalRespostas = 0;
let somaNotas = 0;

while (continuar) {
    let nota = parseInt(prompt("De 1 a 5, qual a sua satisfação com o curso?"));

    if (nota >= 1 && nota <= 5) {
        somaNotas += nota;
        totalRespostas++;
    } else {
        alert("Nota inválida.");
    }

    continuar = prompt("Deseja responder mais uma vez? (sim/não)").toLowerCase() === 'sim';
}

let Media = somaNotas / totalRespostas;
alert(`Média de satisfação: ${Media.toFixed(2)}`);

//EX16
continuar = true;

while (continuar) {
    let valorTotal = parseFloat(prompt("Digite o valor total da compra:"));
    let parcelas = parseInt(prompt("Digite o número de parcelas:"));

    let valorParcela = valorTotal / parcelas;
    alert(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);

    continuar = prompt("Deseja calcular outro parcelamento? (sim/não)").toLowerCase() === 'sim';
}

//EX17
continuar = true;

while (continuar) {
    let reais = parseFloat(prompt("Digite o valor em reais:"));
    let dolar = reais / 5.3;

    alert(`${reais} reais é igual a ${dolar.toFixed(2)} dólares`);

    continuar = prompt("Deseja converter outro valor? (sim/não)").toLowerCase() === 'sim';
}

//EX18
continuar = true;

while (continuar) {
    let palavra = prompt("Digite uma palavra:");
    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        alert("A palavra é um palíndromo.");
    } else {
        alert("A palavra não é um palíndromo.");
    }

    continuar = prompt("Deseja testar outra palavra? (sim/não)").toLowerCase() === 'sim';
}

//EX19
const opcoes = ["pedra", "papel", "tesoura"];
continuar = true;

while (continuar) {
    let jogador = prompt("Escolha pedra, papel ou tesoura:");
    let computador = opcoes[Math.floor(Math.random() * 3)];

    alert(`Computador escolheu: ${computador}`);

    if (jogador === computador) {
        alert("Empate!");
    } else if ((jogador === "pedra" && computador === "tesoura") || 
               (jogador === "papel" && computador === "pedra") || 
               (jogador === "tesoura" && computador === "papel")) {
        alert("Você venceu!");
    } else {
        alert("Você perdeu!");
    }

    continuar = prompt("Deseja jogar novamente? (sim/não)").toLowerCase() === 'sim';
}

//EX20 
continuar = true;

while (continuar) {
    let numero = parseInt(prompt("Digite o número para a contagem regressiva:"));
    
    for (let i = numero; i >= 0; i--) {
        alert(i);
    }

    continuar = prompt("Deseja fazer outra contagem regressiva? (sim/não)").toLowerCase() === 'sim';
}
