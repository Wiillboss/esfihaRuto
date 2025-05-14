// Tentativa de fazer o botao funcionar sem fazer o load, segue o codigo abaixo.
// Tentei com document.getElementById('btn_registrar_compra'); e tambem não deu certo.


/*
COMENTADO JUNTO COM CODIGO DO ELITON
 const botao = document.querySelector('#btn_registrar_compra');

 botao.addEventListener('click', function(){
    registrar_produto();
})
*/


/* MEU CODIGO ANTERIOR
function registrar_produto1(){
    
    const no_mercado = document.getElementById("nome_mercado").value;
    const no_produto = document.getElementById("nome_produto").value;
    const kg_prodt = document.getElementById("kg_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    
    const val_ttl_produto = kg_prodt * pre_produto;
    

     document.getElementById("ctrl_mercadoria_nome_produto").innerHTML = no_produto;
     document.getElementById("ctrl_qtdade_estoque").innerHTML = kg_prodt;
     document.getElementById("ctrl_vlorTotal_em_estoque").innerHTML = val_ttl_produto;
     document.getElementById("registro_valor_total_produto").innerHTML = val_ttl_produto;

   limparCampos('form_registro_produto');  
}

var digi = '';

function digita(){


    
    document.getElementById('registro_valor_total_produto').textContent = digi;
}

const registros = [];

function registrar_produto(botao){
    const nome_mercado = document.getElementById("nome_mercado").value;
    const nome_prodt = document.getElementById("nome_produto").value;
    const kg_prodt = document.getElementById("kg_produto").value;
    const pre_produto = document.getElementById("preco_produto").value;
    const val_ttl_produto = kg_prodt * pre_produto;
    digi = val_ttl_produto;
    if (nome_prodt && kg_prodt && pre_produto){
        registros.push({nome_prodt, kg_prodt, pre_produto});
        //  alert("Preenchimento completo."); teste
        atualizarLista();
        // limparCampos('form_registro_produto');  
                
    }else{
        alert("Preencha todos os campos.");
    }

}
*/

/*
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
*/

/* CODIGO DO ELITON


function atualizarLista(){
    const lista = document.getElementById('ctr_mercadoria');
    // lista.innerHTML = '';
    let cont = 0;
    registros.forEach((r, i) =>{
        const legend = document.createElement('legend');
        lista.appendChild(legend);
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.textContent="Nome do produto: ";
        const span = document.createElement('span');
        span.innerHTML =`<span id="ctrl_mercadoria_nome_produto">&#128230 ${registros[cont].nome_prodt}</span>`;
        
        label.appendChild(span);
        // label.appendChild(br);
        lista.appendChild(label);
        
        const label1 = document.createElement('label');
        label1.textContent="Preço do produto: "
        const span1 = document.createElement('span');
        span1.innerHTML=`<span id="ctrl_qtdade_estoque">&#128230 ${registros[cont].pre_produto}</span>` ;
        label1.appendChild(span1);
        lista.appendChild(label1);
        lista.appendChild(br);
        cont = cont + 1;

        // label.appendChild(span);
        // div.appendChild(label);
        //         div.classList.add('');

    })
}

*/

/*
CODIGO ELITON
function limparCampos(a){
     
       //document.getElementById('nome_mercado').value = '';
       //document.getElementById('nome_produto').value = '';
       //document.getElementById('kg_produto').value = '';
       //document.getElementById('preco_produto').value = '';
       
    document.getElementById('registro_valor_total_produto').textContent = '';
    const teste = document.getElementById(a);
    teste.reset();
}

*/

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

const produto = [] //O array

function registrarProduto(){
    const InputnomeMercado = document.getElementById('nome_mercado');
    const InputnomeProduto = document.getElementById('nome_produto');
    const InputkgProduto = document.getElementById('kg_produto');
    const InputPrecoProduto = document.getElementById('preco_produto');
    
    const nomeMercado = InputnomeMercado.value.trim();
    const nomeProduto = InputnomeProduto.value.trim();
    const kgProduto = parseFloat(InputkgProduto.value);
    const precoProduto = parseFloat(InputPrecoProduto.value);
    const val_ttl_produto = kgProduto * precoProduto;

    const novoRegistro = {
        mercado: nomeMercado,
        produto: nomeProduto,
        kg: kgProduto,
        preco: precoProduto,
        val_ttl_produto
    }

    if (nomeMercado && nomeProduto && !isNaN(kgProduto) && !isNaN(precoProduto)){
        produto.push(novoRegistro);
        //alert(novoRegistro.mecado)
        //alert(produto[0].mecado)
        //alert(nomeMercado);
        exibirProdutos();
        InputnomeMercado.value = "";
        InputnomeProduto.value = "";
        InputkgProduto.value = "";
        InputPrecoProduto.value = "";
    }else{
        alert('Preencha todos os campos corretamente!');
    }
}

function exibirProdutos(){
    const lista = document.getElementById('listaProduos');
    lista.innerHTML = "";

    // produto.forEach((intemProduto, indice) =>{
    //     const item = document.createElement('li');
    //     item.texContent = `${intemProduto}`; 
    //     //${produto.nomeMercado} - ${produto.nomeProduto} - ${produto.kgProduto} - R$ ${produto.precoProduto}`;
    //     lista.appendChild(item);
    // })

    produto.forEach((itemProduto, indice) => {
    const item = document.createElement('li');
    item.textContent = `Mercado: ${itemProduto.mercado} - Produto: ${itemProduto.produto} - Qtd. Kg: ${itemProduto.kg} - Valor do kg: R$ ${itemProduto.preco} - Valor total pago R$: ${itemProduto.val_ttl_produto}`;
    lista.appendChild(item);
    });
}