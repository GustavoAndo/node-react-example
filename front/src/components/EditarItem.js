import React, { useState } from 'react'

function EditarItem({ item, itens, setItens }) {
    const [nome, setNome] = useState(item.nome)
    const [preco, setPreco] = useState(item.preco)

    const editarItem= async e => {
      e.preventDefault();

      fetch('http://localhost:3001/compra/' + item.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome, preco}),
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    };

    const cancelar = () => {
        setNome(item.nome)
        setPreco(item.preco)
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editarId${item.id}`}>
            Editar
            </button>
            <div className="modal fade" id={`editarId${item.id}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-primary" id="exampleModalLongTitle">Editar dados do item</h5>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input 
                        type='text' 
                        placeholder='Nome' 
                        className='form-control mb-2' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type='number' 
                        placeholder='Preço' 
                        className='form-control mb-2' 
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        data-dismiss="modal" 
                        onClick={cancelar}                   
                    >Cancelar</button>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-dismiss="modal"
                        onClick={editarItem} 
                    >Editar</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default EditarItem;