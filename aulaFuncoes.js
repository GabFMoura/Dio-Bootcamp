function recebaNome(name) {
console.log ('meu nome é ' + name);
 }
  recebaNome('João');

  function verificarIdade(idade) {
    if (idade >= 18) {
      console.log('Seja bem-vindo')
    } else {
      console.log(`volte daqui a ${18-idade} ano(s)`)
    }
  } verificarIdade(16)