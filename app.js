function criarCartão (item, pergunta, resposta) {
    //console.log(item,perrgunta, resposta)

    let flashcard = document.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = `
           <div class="cartao__conteudo">
                <h3>missão</h3>
                
                <div class="cartao__conteudo__pergunta">
                    Saiba qual é a missão de nossa empresa!
                </div>
                
                <div class="cartao__conteudo__pergunta">
                    Nossa missão é...
                </div>
            </div>
    `
    flashcard.appendChild(cartao)

}