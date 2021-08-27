const express = require('express')
const routes = express.Router()
const oculos = []

routes.get('/api', (req, res) => {
    res.json({ mensagem: "Essa é minha primeira API" })
})

routes.post('/cadastrar', (req, res) => {
    const { id, armacao, lente, cor } = req.body
    console.log(`salvando no banco de dados as informações ${id} ${armacao} ${lente} ${cor}`)
    oculos.push(req.body)
    res.json(req.body)
})

routes.get('/oculos', (req, res) => {
    res.send(oculos)
})

routes.put('/oculos/alterar/:id', (req, res) => {
    let validacao = false
    let idx = 0
    const { id: alterar } = req.params
    const { marca, tamanho, cor} = req.body
    console.log(alterar)
    for (let index = 0; index < oculos.length; index++) {
        const { id } = oculos[index];
        console.log(oculos[index])
        if (id == alterar) {
            validacao = true
            idx = index
        }
    }

    if (validacao == true) {
        oculos[idx].marca = marca
        oculos[idx].tamanho = tamanho
        oculos[idx].cor = cor
        res.send(oculos[idx])
    }
    else {
        res.json({
            mensagem:"Sapato não encontrado"
        })
    }
})

routes.delete('/oculos/deletar/:id',(req,res) => {
  let validacao = false
  let idx = 0
  
    const { id: deletar } = req.params
    for (let index = 0; index < oculos.length; index++) {
        const { id } = oculos[index];
        console.log(oculos[index])
        if (id == deletar) {
            validacao = true
            idx = index
        }
    }
    if (validacao == true) {
     delete oculos[idx]
     res.json({
        mensagem:"Sapato deletado com sucesso"
    })
    }
    else {
        res.json({
            mensagem:"Sapato não encontrado"
        })
    }
})

module.exports = routes