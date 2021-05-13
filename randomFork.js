let resultado = {}
console.log('random fork');

process.on('message', cantidad => {
  
  for(let i = 0; i < cantidad.cantidad; i++) {
    let valor = Math.floor(Math.random() * 1000) +1

    if(!resultado || !resultado.hasOwnProperty(valor)) {
      resultado[valor] = 0
    }
    resultado[valor]++
  }
  process.send({resultado})

})
