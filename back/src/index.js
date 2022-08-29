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

app.post('/teste', async(req, res) => {
    try {
        const novoUsuario = await bd.query(
            "INSERT INTO usuarios (nome, email, idade, dinheiro, data_cadastrado) VALUES ('Gustavo', 'gustavo.k.ando@gmail.com', 19, 0.50, 'now')")
    } catch (error) {
        console.error(error)
    }
})
*/

// create

app.post('/adicionarUsuario', async(req, res) => {
    try {
        const { nome } = req.body
        const { email } = req.body
        const { idade } = req.body
        const { dinheiro } = req.body

        const novoUsuario = await bd.query(
            "INSERT INTO usuarios (nome, email, idade, dinheiro, data_cadastrado) VALUES ($1, $2, $3, $4, 'now') RETURNING *", [nome, email, idade, dinheiro]
        )
    } catch (error) {
        console.error(error)
    }
})

// read


// update


// delete


app.listen(SERVER_PORT, () => {
    console.log('Servidor rodando na url: http://localhost:' + SERVER_PORT)
})