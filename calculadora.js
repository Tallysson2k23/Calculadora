
class Calculadora {
  adicionar(x, y) {
    return x + y;
  }
  subtracao(x, y) {
    return x - y;
  }

  multiplicacao(x, y) {
    return x * y;
  }

  divisao(x, y) {
    return x / y;
  }
}

const calculadora = new Calculadora();

const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("informe um numero: "));

const operacao = prompt("Escohla uma das operaraçoes: + , - , / , *: ");

const num2 = parseFloat(prompt("informe proximo numero: "));


let mensagem = "";
switch (operacao) {
  case "+":
    mensagem = calculadora.adicionar(num1, num2);
    break;
  case "-":
    mensagem = calculadora.subtracao(num1, num2);
    break;
  case "*":
    mensagem = calculadora.multiplicacao(num1, num2);
    break;
  case "/":
    mensagem = calculadora.divisao(num1, num2);
    break;
}
console.log(mensagem);