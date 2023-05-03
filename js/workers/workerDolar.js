async function conectaAPI() {
    const coencta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    const conectaConvertido = await coencta.json()
    postMessage(conectaConvertido.USDBRL)
}

addEventListener('message', () => {
    conectaAPI()

    setInterval(() => conectaAPI(), 5000)
})