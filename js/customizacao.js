// Tentativa de fazer o botao funcionar sem fazer o load, segue o codigo abaixo.
const botao = document.querySelector('button');

botao.addEventListener('click', function(event){
    event.preventDefault();
})

function registro_produto(botao){
    
    const no_mercado = document.getElementById("nome_mercado").value;
    const no_produto = document.getElementById("nome_produto").value;
    const quant_produto = document.getElementById("quantidade_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    
    const val_ttl_produto = quant_produto * pre_produto;
    

     document.getElementById("ctrl_mercadoria_nome_produt").innerHTML = no_produto;
     document.getElementById("ctrl_qtdade_estoque").innerHTML = quant_produto;
     document.getElementById("ctrl_vlorTotal_em_estoque").innerHTML = val_ttl_produto;
}


// Deu certo uando a função onkeyup de acordo com o função abaixo, entretanto as mudanças só funcionam nos locais onde tem SPAM
/*
function re_produto(){
    const no_mercado = document.getElementById("nome_mercado").value;
    const no_produto = document.getElementById("nome_produto").value;
    const quant_produto = document.getElementById("quantidade_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;

    const val_ttl_produto = quant_produto * pre_produto;
    
     document.getElementById("registro_valor_total_produto").innerHTML = val_ttl_produto;
     document.getElementById("ctrl_mercadoria_nome_produto_spam").innerHTML = no_produto;
     document.getElementById("ctrl_qtdade_estoque_spam").innerHTML = quant_produto;
     document.getElementById("ctrl_vlorTotal_em_estoque_spam").innerHTML = val_ttl_produto;
}
*/     