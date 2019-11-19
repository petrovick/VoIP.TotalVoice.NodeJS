const TotalVoice = require('totalvoice-node')
const axios = require('axios')
const client = new TotalVoice(process.env.TOKEN)

const servidor = 
  {
    nome: 'DB1',
    url: 'http://localhost:3001',
    responsavel: {
      nome: 'Gabriel Petrovick',
      telefone: process.env.TELEFONE
    }
  }

function Verificar() {
  axios({
    url: servidor.url,
    method: 'get'
  })
  .then((response) => {
    console.log(`${servidor.nome} esta no ar.`)
  })
  .catch(() => {
    const mensagem = `Atencao ${servidor.desenvolvedor.nome}, o servidor ${servidor.nome} nao esta respondendo.`
    
  })
}