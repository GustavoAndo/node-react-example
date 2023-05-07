import React from 'react'

function ExcluirItem({ idItem, itens, setItens }) {
    const excluirItem = async() => {
        fetch('http://localhost:3001/compra/' + idItem, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <button type="button" className="btn btn-danger ml-1" data-toggle="modal" data-target={`#excluirId${idItem}`}>
            Excluir
            </button>
            <div className="modal fade" id={`excluirId${idItem}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-danger" id="exampleModalLongTitle">Tem certeza que deseja excluir este item?</h5>
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
                        onClick={excluirItem}
                    >Excluir</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ExcluirItem