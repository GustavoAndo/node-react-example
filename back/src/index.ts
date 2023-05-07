import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import { AppDataSource } from './data-source';
import { Compra } from './models/Compra';

const app = express()

app.use(express.json())
app.use(cors())

AppDataSource
    .initialize()
    .then(() => {
        console.log("Banco de dados conectado!")
    })
    .catch((e) => {
        console.error("Erro na conexão do banco de dados:", e)
    })

app.get('/', (req, res) => {
    res.send('Testando servidor')
})

app.post('/compra', async (req, res) => {
    try {
        const { nome, preco } = req.body;

        const item = AppDataSource.manager.create(Compra, {nome, preco});
        const novoItem = await AppDataSource.manager.save(Compra, item);
        
        res.status(201).json({novoItem, message: "Item adicionado com sucesso!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Ocorreu um erro no servidor."});
    }
})

app.get('/compra', async (req, res) => {
    try {
        const itens = await AppDataSource.manager.find(Compra);
        
        res.json(itens);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Ocorreu um erro no servidor."});
    }
})

app.put('/compra/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;

        const item = AppDataSource.manager.create(Compra, {id: Number(id), nome, preco});
        const novoItem = await AppDataSource.manager.save(Compra, item);
        
        res.status(200).json({novoItem, message: "Item atualizado com sucesso!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Ocorreu um erro no servidor."});
    }
})

app.delete('/compra/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const item =  await AppDataSource.manager.findOne(Compra, {
            where: {
                id: Number(id)
            },
        })
        await AppDataSource.manager.delete(Compra, item);
        
        res.status(200).json({item, message: "Item removido com sucesso!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Ocorreu um erro no servidor."});
    }
})

app.get('/compra/preco-total', async (req, res) => {
    try {
        const itens = await AppDataSource.manager.find(Compra);
        
        let precoTotal = 0;
        for (let i=0; i<itens.length; i++) {
            precoTotal += Number(itens[i].preco)
        }

        res.json({precoTotal: precoTotal.toFixed(2)});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Ocorreu um erro no servidor."});
    }
})

const port = 3001
app.listen(port, () =>{
    console.log("Servidor executando na porta " + port)
})