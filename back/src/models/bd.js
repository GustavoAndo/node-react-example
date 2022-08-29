// CONEXÃO COM O BANCO DE DADOS

// import
const Pool = require('pg').Pool

// dotenv
require('dotenv').config()
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASS = process.env.DB_PASS || ''
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || '5432'
const DB_DATA = process.env.DB_DATA || 'database'

// conexão
const bd = new Pool({
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATA 
})

// export
module.exports = bd