// Tentativa de fazer o botao funcionar sem fazer o load, segue o codigo abaixo.
// Tentei com document.getElementById('btn_registrar_compra'); e tambem não deu certo.



const botao = document.querySelector('button');

botao.addEventListener('click', function(event){
    event.preventDefault();
})

/*
function registrar_produto(botao){
    
    const no_mercado = document.getElementById("nome_mercado").value;
    const no_produto = document.getElementById("nome_produto").value;
    const kg_prodt = document.getElementById("kg_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    
    const val_ttl_produto = kg_produto * pre_produto;
    

     document.getElementById("ctrl_mercadoria_nome_produto").innerHTML = no_produto;
     document.getElementById("ctrl_qtdade_estoque").innerHTML = kg_prodt;
     document.getElementById("ctrl_vlorTotal_em_estoque").innerHTML = val_ttl_produto;
     document.getElementById("registro_valor_total_produto").innerHTML = val_ttl_produto;
}
*/


const registros = [];

function registrar_produto(botao){
    const nome_mercado = document.getElementById("nome_mercado").value;
    const nome_prodt = document.getElementById("nome_produto").value;
    const kg_prodt = document.getElementById("kg_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    const val_ttl_produto = kg_prodt * pre_produto;
    document.getElementById('registro_valor_total_produto').innerHTML = val_ttl_produto;
    if (nome_prodt && kg_prodt && pre_produto){
        registros.push({nome_prodt, kg_prodt, pre_produto});
        alert("Preenchimento completo."); //teste
        atualizarLista();
        limparCampos();
                
    }else{
        alert("Preencha todos os campos.");
    }

}

function editar_registro(index){
    const nw_name_merc = prompt("Editar nome do Mercado: ", registros[index].nome_mercado);
    const nw_name_prodt = prompt("Editar nome do Produto: ", registros[index].nome_prodt);
    const nw_kg_prodt = prompt("Editar Kg do Produto: ", registros[index].kg_prodt);
    const nw_pre_prodt = prompt("Editar nome do Preço do Produto: ", registros[index].pre_produto);

    if(nw_name_merc && nw_name_prodt && nw_kg_prodt && nw_pre_prodt){
        registros[index].nome_mercado = nw_name_merc;
        registros[index].nome_prodt = nw_name_prodt;
        registros[index].kg_prodt = nw_kg_prodt;
        registros[index].pre_produto = nw_pre_prodt;
        atualizarLista();
    }
}

function excluir_registro(index){
    if(confirm("Tem certeza que deseja excluir este registro?")){
        registros.splice[index, 1];
        atualizarLista();
    }
}

function atualizarLista(){
    const lista = document.getElementById('lista-registros');
    lista.innerHTML = '';

    registros.forEach((r, i) =>{
        const item = document.createElement()
    })
}

function limparCampos(){
    document.getElementById('nome_mercado').value = '';
    document.getElementById('nome_prodt').value = '';
    document.getElementById('kg_prodt').value = '';
    document.getElementById('pre_produto').value = '';
    document.getElementById('val_ttl_produto').value = '';

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