
/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const nota1 = 5;
const nota2 = 8;
const nota3 = 7;
const mediaAluno= (nota1 + nota2 + nota3) / 3;
const media = 7;

if (mediaAluno > media) {
  console.log('Parabéns, você foi aprovado, sua média foi' + mediaAluno.toFixed(2) )
}
else if (mediaAluno <= 7 && mediaAluno >= 5) {
  console.log(`Poxa, não foi dessa vez, sua nota foi ${mediaAluno.toFixed(2) }, você precisa alcançar a nota ${media+0.1}  na recuperação para ser aprovado`)
} else {
  console.log(`Você está reprovado, sua nota foi ${mediaAluno}`)
};

/* 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

function calcularImc(peso,altura) {
  peso / Math.pow (altura, 2);
}

function classificarImc(imc) {
  if (imc >= 40) {
    return 'Você se encontra com Obesidade Grave, cuidado, procure um nutricionista';
  } else if (imc >= 31 && imc <= 39) {
    return 'Você está obeso, cuidado, procure um nutricionista!';
  } else if (imc >= 25 && imc <= 30) {
    return 'Você está acima do peso';
  } else if (imc >= 18.5 && imc <= 24) {
    return 'Você está no peso ideal, parabéns';
  } else {
    return 'Você está abaixo do peso, busque um nutricionista';
  };
}

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc)); 
}) ()


/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoEtiqueta = 100;
const formaPagamento = 4;

function darDesconto(valor, desconto) {
    return(valor - (valor * (desconto/100)))
}

function porJuros(valor, juros) {
  return (valor + (valor * (juros/100)));
}

if (formaPagamento === 1 ) {
  console.log (darDesconto (precoEtiqueta, 10));
} else if (formaPagamento === 2) {
  console.log (darDesconto(precoEtiqueta, 15));
} else if (formaPagamento ===3) {
  console.log(darDesconto(precoEtiqueta, 0));
} else{
  console.log(porJuros(precoEtiqueta, 10))
}