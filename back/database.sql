CREATE DATABASE crud;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INTEGER,
    dinheiro NUMERIC,
    data_cadastrado TIMESTAMP
);