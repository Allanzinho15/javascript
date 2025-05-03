function verificar() {
  let data = new Date();
  let anodenascimento = data.getFullYear();
  let caixa_do_ano = document.querySelector('#ano_de_nascimento');
  let resposta = document.querySelector('.respostadamaquina');
  
  if (caixa_do_ano.value.length == 0 || Number(caixa_do_ano.value) >= anodenascimento) {
    alert('[ERRO] verifique os dados e tente novamente!');
  } else {
    let sexo = document.getElementsByName('sex1');
    let idade = anodenascimento - Number(caixa_do_ano.value);
    let genero = '';
    let imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');

    if (sexo[0].checked) {
      genero = 'masculino';
      
      if (idade >= 0 && idade <= 10) {
        imagem.setAttribute('src', 'crianca-masculino.jpg');
      } else if (idade < 22) {
        imagem.setAttribute('src', 'jovem-masculino.jpg');
      } else {
        imagem.setAttribute('src', 'adulto-masculino.jpg');
      }
      
    } else if (sexo[1].checked) { 
      genero = 'feminino';

      if (idade >= 0 && idade <= 10) {
        imagem.setAttribute('src', 'crianca-feminino.jpg');
      } else if (idade < 22) {
        imagem.setAttribute('src', 'jovem-feminino.jpg');
      } else {
        imagem.setAttribute('src', 'mulher-adulta.jpg');
      }
    } else {
      alert('[ERRO] Selecione um sexo!');
      return; // Aqui ainda precisamos do return
    }

    resposta.style.textAlign = 'center';
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resposta.appendChild(imagem);
  }
}