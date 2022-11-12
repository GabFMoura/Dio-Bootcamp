/*- 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. 
*/

class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  calcularViagem(distancia, preco) {
    return distancia*this.gastoMedioKm* preco;
  }
}

const gol = new Carro('volkswagem', 'Prata', 1/10);
const kicks = new Carro('Nissan', 'Preto', 1/6.2)

var viagem = gol.calcularViagem(390, 4.70)
console.log(viagem)


var viagem1 = kicks.calcularViagem(390, 4.70)
console.log(viagem1)

/*- 
2 - Crie uma classe para representar pressoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura)) ;
Instancie umap essoa chamada José que tenha 70kg de peso e 1,175 de altura e peça ao José para dizer o valor do seu IMC. 
*/

class Pessoa{
  nome;
  peso;
  altura;
  
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  } 
  classificarImc() {
    const imc = this.calcularImc();
    if (imc >= 40) {
      return 'Você se encontra com Obesidade Grave, cuidado, procure um nutricionista';
    } else if (imc >= 31 && imc <= 39.99) {
      return 'Você está obeso, cuidado, procure um nutricionista!';
    } else if (imc >= 25 && imc <= 30.99) {
      return 'Você está acima do peso';
    } else if (imc >= 18.5 && imc <= 24.99) {
      return 'Você está no peso ideal, parabéns';
    } else {
      return 'Você está abaixo do peso, busque um nutricionista';
    };
    }
  }

const jose = new Pessoa('José', 70, 1.75)
const gabriel = new Pessoa('Gabriel', 78, 1.74)
console.log(jose.classificarImc())
console.log(gabriel.classificarImc())
