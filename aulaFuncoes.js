function recebaNome(name) {
return('Olá, ' + name);
 }
  recebaNome('João');

  function verificarIdade(idade) {
    if (idade >= 18) {
      console.log(recebaNome('Raul') + ', seja bem-vindo')
    } else {
      console.log(`volte daqui a ${18-idade} ano(s)`)
    }
  } verificarIdade(19)