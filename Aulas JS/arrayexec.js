// 1) Crie um programa que dado um número imprima a sua tabuada

const numero = 2

for (let index = 1; index <= 10; index++) {
  console.log(numero*index)  
}

/* 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado. */

const  numeros = [0,1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < numeros.length; index++) {
    const parImpar = numeros[index]
  if (parImpar%2 === 0 ){
    console.log(parImpar)
  } 
}