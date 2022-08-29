import React, { Fragment , useState } from 'react'

function ExcluirUsuario({ idUsuario }) {
    const excluirUsuario = async(id) => {
        try {
            const excluirTarefa = await fetch('http://localhost:3001/excluirUsuario/' + id, {
                method: 'DELETE'
            })
            console.log(excluirTarefa)
            window.location = '/'
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-danger ml-1" data-toggle="modal" data-target={`#excluirId${idUsuario}`}>
            Excluir
            </button>
            <div className="modal fade" id={`excluirId${idUsuario}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-danger" id="exampleModalLongTitle">Tem certeza que deseja excluir este usuário?</h5>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        data-dismiss="modal"                   
                    >Cancelar</button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={()=>excluirUsuario(idUsuario)}
                    >Excluir</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default ExcluirUsuario