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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/teste', async(req, res) => {
    try {
        const novaTarefa = await bd.query(
            "INSERT INTO usuarios (nome, email, idade, dinheiro, data_cadastrado) VALUES ('Gustavo', 'gustavo.k.ando@gmail.com', 19, 0.50, 'now')")
    } catch (error) {
        console.error(error)
    }
})

// create


// read


// update


// delete


app.listen(SERVER_PORT, () => {
    console.log('Servidor rodando na url: http://localhost:' + SERVER_PORT)
})