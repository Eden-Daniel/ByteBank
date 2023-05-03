import selecionaCotacao from './imprimeCotacao.js'

function geraHoraio() {
    let data = new Date()
    let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() 
    return horario
}

function adicionaDados(grafico, legenda, dados){
    grafico.data.labels.push(legenda)
    grafico.data.datasets.forEach(dataset => {dataset.data.push(dados)})

    grafico.update()
} 




// Dolar 
const graficoDolar = document.getElementById('graficoDolar')

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
  }, 
})

let workerDolar = new Worker ('./js/workers/workerDolar.js')
workerDolar.postMessage('usd')
workerDolar.addEventListener('message', evento => {
    let tempo = geraHoraio() 
    let valor = evento.data.ask;
    selecionaCotacao('dolar', valor)
    adicionaDados(graficoParaDolar, tempo, valor)
})

// Iene
const graficoIene = document.getElementById('graficoIene')

const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Iene',
        data: [],
        borderWidth: 1
      }]
  }, 
})

let workerIene = new Worker ('./js/workers/workerIene.js')
workerIene.postMessage('iene')
workerIene.addEventListener('message', evento => {
    let tempo = geraHoraio() 
    let valor = evento.data.ask;
    selecionaCotacao('iene', valor)
    adicionaDados(graficoParaIene, tempo, valor)
})
