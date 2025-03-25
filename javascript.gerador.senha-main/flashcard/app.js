function criaCartao(categoria, pergunta, resposta){
    let container = getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'}


    cartão.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Educação Financeira</h3>
    <div class="cartao__conteudo__pergunta">
       <p> O que é a sigla CDB?</p>
    </div>
    <div class="cartao__conteudo__resposta">
       <p> Certiicado de Deposito Bancario.</p> 
    </div>
  </div>
    
 `
let respostaEstaVisivel=false

function viraCartão(){
   respostaEstaVisivel=!respostaEstaVisivel
   cartão.classList.toggle('active', viraCartão)

   container.appendChild(cartão)
}