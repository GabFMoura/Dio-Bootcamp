const precoEtanol = 4;
const precoGasolina = 5.5;
const gastoMedioKM = 8;
const distanciaKM = 120;
const combustivelCarro = 'Etanol';

if(combustivelCarro === 'Etanol') {
  const valorTotal = (distanciaKM/gastoMedioKM) * precoEtanol;
console.log(`você gastará RS ${valorTotal.toFixed(2)}`)
}  else {
  const valorTotal = (distanciaKM/gastoMedioKM) * precoGasolina;
console.log(`você gastará RS ${valorTotal.toFixed(2)}`)
}