// Tentativa de fazer o botao funcionar sem fazer o load, segue o codigo abaixo.
// Tentei com document.getElementById('btn_registrar_compra'); e tambem não deu certo.

const botao = document.querySelector('button');

botao.addEventListener('click', function(event){
    event.preventDefault();
})

function registrar_produto(botao){
    
    const no_mercado = document.getElementById("nome_mercado").value;
    const no_produto = document.getElementById("nome_produto").value;
    const quant_produto = document.getElementById("quantidade_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    
    const val_ttl_produto = quant_produto * pre_produto;
    

     document.getElementById("ctrl_mercadoria_nome_produto").innerHTML = no_produto;
     document.getElementById("ctrl_qtdade_estoque").innerHTML = quant_produto;
     document.getElementById("ctrl_vlorTotal_em_estoque").innerHTML = val_ttl_produto;
     document.getElementById("registro_valor_total_produto").innerHTML = val_ttl_produto;
}

/* Teste para ao clicar no input, fazer a conta
function soma_total_entrada_saida(){
    document.getElementById("registro_valor_total_produto").innerHTML = val_ttl_produto;
}
*/

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