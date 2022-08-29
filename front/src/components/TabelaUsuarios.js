import React, { Fragment, useEffect, useState } from 'react'

function TabelaUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    // Pegando usuarios do back
    const getUsuarios = async() => {
        try {
            const response = await fetch('http://localhost:3001/usuarios')
            const jsonData = await response.json()
            setUsuarios(jsonData)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUsuarios()
    }, [])

    return (
        <Fragment>
            <table className="table table-striped mt-4 text-center">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Dinheiro</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.idade}</td>
                        <td>{usuario.dinheiro}</td>
                        <td>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    ) 
}

export default TabelaUsuarios