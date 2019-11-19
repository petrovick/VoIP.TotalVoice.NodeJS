require('dotenv').config()
const TotalVoice = require('totalvoice-node')
const axios = require('axios')
const totalClient = new TotalVoice('66cb732b2d07f1bf5b73b36c8af2456f')

const servidor = 
  {
    nome: 'DB1',
    url: 'http://localhost:3001',
    responsavel: {
      nome: 'Gabriel Petrovick',
      telefone: '5534998389076'
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

    const mensagem = `Atencao ${responsavel}, peco que verifique, pois o servidor ${server} nao esta respondendo.`

    totalClient.tts.enviar(
      telefone, 
      mensagem, 
      {
				velocidade: 2,
				tipo_voz: "br-Ricardo"
      }
    ).then(() => {
      console.log(`${responsavel} foi avisado.`);
    })
    .catch(function(err) {
      console.log(`${err}`)
    });

  })
}

Verificar();