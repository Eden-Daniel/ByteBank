const lista = document.querySelectorAll('[data-lista]')

function selecionaCotacao(nome, valor) { 
   lista.forEach((listaEscolhida) => {
    if(listaEscolhida.id == nome) {
        imprimeCotacao(listaEscolhida, nome, valor)
    }
    }
)}

function imprimeCotacao(lista, nome, valor) {
    
    lista.innerHTML = ''

    const plurais = {
        'dolar': 'dolares',
        'iene': 'ienes'
    } 

    for(let mult = 1; mult <= 1000; mult *= 10){
        const listaItem = document.createElement('li')
        listaItem.innerHTML = `${mult} ${mult == 1 ? nome : plurais[nome]} :R$${(valor * mult).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}

export default selecionaCotacao