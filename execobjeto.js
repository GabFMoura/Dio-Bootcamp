/*- 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

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