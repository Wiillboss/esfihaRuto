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

const lista_de_mercadorias = [] //O array

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
        lista_de_mercadorias.push(novoRegistro);
        //alert(novoRegistro.mecado)
        //alert(produto[0].mecado)
        //alert(nomeMercado);
        //adicionarLinha();
        exibirProdutos();
        InputnomeMercado.value = "";
        InputnomeProduto.value = "";
        InputkgProduto.value = "";
        InputPrecoProduto.value = "";
    }else{
        alert('Preencha todos os campos corretamente!');
    }

    
}

function adicionarLinha(mercado, produto, kg, preco, val_ttl_produto){
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();
    
    const celula1 = novaLinha.insertCell(1);
    const celula2 = novaLinha.insertCell(2);
    const celula3 = novaLinha.insertCell(3);
    const celula4 = novaLinha.insertCell(4);
    const celula5 = novaLinha.insertCell(5);

    celula1.innerText = mercado;
    celula2.innerText = produto;
    celula3.innerText = kg;
    celula4.innerText = preco;
    celula5.innerText = val_ttl_produto;

}

function exibirProdutos(){
    const lista = document.getElementById('listaProduos');
    lista.innerHTML = "";
    //Abaixo foi comentado para fazer testes
    lista_de_mercadorias.forEach((itemProduto, indice) => {
        
        /*const item = document.createElement('li');*/
        /*
        item.textContent =
            `Mercado: ${itemProduto.mercado} - 
            Produto: ${itemProduto.produto} - 
            Qtd. Kg: ${itemProduto.kg} - 
            Valor do kg: R$ ${itemProduto.preco} - 
            Valor total pago R$: ${itemProduto.val_ttl_produto}`;
        lista.appendChild(item);
        */

        const item1 = document.createElement('li');
        const item2 = document.createElement('li');
        const item3 = document.createElement('li');
        const item5 = document.createElement('li');

        item1.textContent =
            `Mercado: ${itemProduto.mercado}`;
        lista.appendChild(item1);
        item2.textContent =
            `Produto: ${itemProduto.produto}`;
        lista.appendChild(item2);
        item3.textContent =
            `Qtd. Kg: ${itemProduto.kg}`;
        lista.appendChild(item3);
        item4.textContent =
            `Valor do kg: R$ ${itemProduto.preco}`;
        lista.appendChild(item4);
        item5.textContent =
            `Valor total pago R$: ${itemProduto.val_ttl_produto}`;
        lista.appendChild(item5);

    // adicionar estilos: de acordo com o chat e não funcionou
    /*item.style.margin = "12px 0";
    item.style.padding = "10px";
    item.style.backgroundColor = "#f5f5f5";
    item.style.borderRadius = "6px";
    item.style.border = "1px solid #ddd";*/    

    });

    // Abaixo foi feita uma nova tentativa de separar os valores do obj
    const listaDiv= document.getElementById('dvPai');
    listaDiv.innerHTML = "";
    lista_de_mercadorias.forEach((Iproduto,ind) => {
        const i1 = getElementById('dv1');
        i1.textContent = `Mercado: ${Iproduto.mercado}`;
        listaDiv.appendChild(i1);
        
        const i2 = getElementById('dv2');
        i2.textContent = `Produto: ${Iproduto.produto}`;
        listaDiv.appendChild(i2);
        
        const i3 = getElementById('dv3');
        i3.textContent = `Qtd. Kg: ${Iproduto.kg}`;
        listaDiv.appendChild(i3);
        
        const i4 = getElementById('dv4');
        i4.textContent = `Valor do Kg: R$ ${Iproduto.preco}`;
        listaDiv.appendChild(i4);
        
        const i5 = getElementById('dv5');
        i5.textContent = `Valor total pago: R$ ${Iproduto.val_ttl_produto}`;
        listaDiv.appendChild(i5);
    });

    /*
    const lista = document.getElementById('listaProduos');
    lista.innerHTML = "";
    //Abaixo foi comentado para fazer testes
    produto.forEach((itemProduto, indice) => {
        const item = document.createElement('li');
        item.textContent =
            `Mercado: ${itemProduto.mercado} - 
            Produto: ${itemProduto.produto} - 
            Qtd. Kg: ${itemProduto.kg} - 
            Valor do kg: R$ ${itemProduto.preco} - 
            Valor total pago R$: ${itemProduto.val_ttl_produto}`;
        lista.appendChild(item);
    });
    */
   
    /*
    produto.forEach((itemProduto, indice) => {
        //const label = document.createElement('label');
        const item = document.createElement('li');
        const label = document.createElement('legend');
        item.textContent.label =
            `Mercado: ${itemProduto.mercado}`;
        lista.appendChild(item, label);
        const item2 = document.createElement('li');
        item2.textContent.label =
            `Produto: ${itemProduto.produto}`;
        lista.appendChild(item2, label);
    });    
    */

    // produto.forEach((intemProduto, indice) =>{
    //     const item = document.createElement('li');
    //     item.texContent = `${intemProduto}`; 
    //     //${produto.nomeMercado} - ${produto.nomeProduto} - ${produto.kgProduto} - R$ ${produto.precoProduto}`;
    //     lista.appendChild(item);
    // })
    
}