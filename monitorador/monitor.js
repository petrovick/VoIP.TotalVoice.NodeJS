require('dotenv').config()
const TotalVoice = require('totalvoice-node')
const axios = require('axios')
const totalClient = new TotalVoice(process.env.TOKEN)

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
    const {nome: responsavel, telefone } = servidor.responsavel;
    const {nome: server} = servidor;

    const mensagem = `Atencao ${responsavel}, o servidor ${server} nao esta respondendo.`

    totalClient.tts.enviar(
      telefone, 
      mensagem, 
      {
				velocidade: 2,
				tipo_voz: "br-Ricardo"
      }
    ).then(() => {
      console.log(`${responsavel} foi avisado.`);
    });

  })
}

Verificar();