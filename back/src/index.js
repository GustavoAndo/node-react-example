// IMPORTS
const express = require('express')
const cors = require('cors')
const bd = require('./models/bd')
const { Pool } = require('pg')

// CONFIG

// dotenv
require('dotenv').config()
const SERVER_PORT = process.env.SERVER_PORT || 3000

// express e cors
const app = express()
app.use(cors())
app.use(express.json())

// ROUTES

// testes

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/
app.post('/teste', async(req, res) => {
    try {
        const novoUsuario = await bd.query(
            "INSERT INTO usuarios (nome, email, num_jogos, dinheiro, data_cadastro) VALUES ('Gustavo', 'gustavo.k.ando@gmail.com', 19, 0.50, '2003-08-02')")
    } catch (error) {
        console.error(error)
    }
})


// create

app.post('/cadastrarUsuario', async(req, res) => {
    try {
        const { nome } = req.body
        const { email } = req.body
        const { numJogos } = req.body
        const { dinheiro } = req.body

        const novoUsuario = await bd.query(
            "INSERT INTO usuarios (nome, email, num_jogos, dinheiro, data_cadastro) VALUES ($1, $2, $3, $4, 'now') RETURNING *", [nome, email, numJogos, dinheiro]
        )
        res.json(novoUsuario.rows[0])
    } catch (error) {
        console.error(error)
    }
})

// read

app.get('/usuarios', async(req, res) => {
    try {
        const usuarios = await bd.query(
            "SELECT * FROM usuarios"
        )
        res.json(usuarios.rows)
    } catch (error) {
        console.error(error)   
    }
})

// update

app.get('/usuario/:id', async(req, res) => {
    try {
        const { id } = req.params 

        const usuario = await bd.query(
            "SELECT * from usuarios WHERE id = $1", [id]
        )
        res.json(usuario.rows[0])   
    } catch (error) {
        console.error(error)
    }
})

app.put('/editarUsuario/:id', async(req, res) => {
    try {
        const { id } = req.params
        const { nome } = req.body
        const { email } = req.body
        const { numJogos } = req.body
        const { dinheiro } = req.body
        const { dataCadastro } = req.body

        const editarUsuario = await bd.query(
            "UPDATE usuarios SET nome = $1, email = $2, num_jogos = $3, dinheiro = $4, data_cadastro = $5 WHERE id = $6", 
            [nome, email, numJogos, dinheiro, dataCadastro, id]
        )
        res.json('Usuario Atualizado!')
    } catch (error) {
        console.error(error)
    }
})

// delete

app.delete('/excluirUsuario/:id', async(req, res) => {
    try {
        const { id } = req.params

        const excluirUsuario = await bd.query(
            "DELETE FROM usuarios WHERE id = $1", [id]
        )
        res.json('Usuario Exclu??do!')
    } catch (error) {
        console.error(error)
    }
})

// START SERVER
app.listen(SERVER_PORT, () => {
    console.log('Servidor rodando na url: http://localhost:' + SERVER_PORT)
})