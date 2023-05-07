import React, { useEffect, useState } from 'react'
import EditarItem from './EditarItem'
import ExcluirItem from './ExcluirItem'

function TabelaCompras() {
    const [itens, setItens] = useState("")
    const [precoTotal, setPrecoTotal] = useState("")

    useEffect(() => {
        (async() => {
            (async() => {
                fetch('http://localhost:3001/compra', {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  }
                })
                .then(resp => resp.json())
                .then((data) => {
                    setItens(data)
                })
                .catch(err => console.log(err))
              })()

            fetch('http://localhost:3001/compra/preco-total', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then((data) => {
                setPrecoTotal(data.precoTotal)
            })
            .catch(err => console.log(err))
        })()
    }, [itens])

    return (
        <>
            <table className="table table-striped mt-4 text-center">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Preço</th> 
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {itens && itens.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>
                            <EditarItem item={item}></EditarItem>
                            <ExcluirItem idItem={item.id}></ExcluirItem>
                        </td>
                    </tr>
                ))}
                <tr className="table-success">
                        <td><strong>Preço Total:</strong></td>
                        <td>{precoTotal}</td>
                        <td></td>
                    </tr>
            </tbody>
            </table>
        </>
    ) 
}

export default TabelaCompras