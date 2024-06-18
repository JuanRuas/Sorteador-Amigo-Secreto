let listaDeAmigos = [];
reiniciar();

function adicionar(){
   let nomeDoAmigo = document.getElementById('nome-amigo');

   if(nomeDoAmigo.value == ''){
     alert('Informe o nome do amigo!');
     return;
   } 

   if (listaDeAmigos.includes(nomeDoAmigo.value)){
      alert('Pessoa ja adicionada!');
     return;
   }

   let lista = document.getElementById('lista-amigos');

   listaDeAmigos.push(nomeDoAmigo.value);
   amigos = nomeDoAmigo.value;

   if(lista.textContent == '') {
    lista.textContent = nomeDoAmigo.value;
   }else {
    lista.textContent = lista.textContent + ', ' + nomeDoAmigo.value;
   }
    nomeDoAmigo.value = '';

}



function sortear(){
    if(listaDeAmigos.length < 4){
        alert('Número minimo de participante é 4!');
        return;
    }
    let listaSorteio = document.getElementById('lista-sorteio');

    embaralha(listaDeAmigos);
    for (let i = 0; i < listaDeAmigos.length; i++){

    if (i == listaDeAmigos.length - 1) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + '-->' + listaDeAmigos[0] + '<br/>';
    }else{
        listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + '-->' + listaDeAmigos[i + 1] + '<br/>';
    }
    
}


}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){

    listaDeAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';

}
