function verificar(){
   let data = new Date()
   let anodenascimento = data.getFullYear()
   let caixa_do_ano = window.document.querySelector(`#ano_de_nascimento`)
   let resposta = window.document.querySelector(`.respostadamaquina`)
   //conserta caso der errado daqui pra baixo
   let sexo = window.document.getElementsByName(`sex1`)
   let idade = anodenascimento - Number(caixa_do_ano.value)
   let genero = ``
  

   if(caixa_do_ano.value.length == 0 || Number(caixa_do_ano.value) >= anodenascimento ){
     window.alert(`[ERRO] verifique os dados e tente novamento!`)
   }
    if(sexo[0].checked){
    genero = `masculino`

   }else if(idade >=0 && idade <=10){
    resposta.innerHTML = `criança`

    
   }else if(idade < 21){
    
   

   }else if(idade < 50){
    
    

   }

    if(sexo[1].checked){ 
    genero = `feminino`

   }else if(idade >=0 && idade <=10){
    
    

   }else if(idade < 21){
    
    

   }else if(idade < 50){
    
    

   }
   resposta.style.textAlign = `center`
   resposta.innerHTML = `detectamos ${genero} com ${idade}`
   resposta.appendChild(imagem)

   
}