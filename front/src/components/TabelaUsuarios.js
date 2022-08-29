import React, { Fragment, useEffect, useState } from 'react'

// imports
import EditarUsuario from './EditarUsuario'

function TabelaUsuarios() {
    const [usuarios, setUsuarios] = useState([])

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
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nº de Jogos</th>
                    <th scope="col">Dinheiro</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.num_jogos}</td>
                        <td>{usuario.dinheiro}</td>
                        <td>
                            <EditarUsuario usuario={usuario}></EditarUsuario>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    ) 
}

export default TabelaUsuarios