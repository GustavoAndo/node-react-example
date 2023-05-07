import React, { Fragment, useState } from 'react'

function CadastroItem({itens, setItens}) {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
  
    const cadastrarItem = async e => {
        e.preventDefault();

        fetch('http://localhost:3001/compra', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome, preco}),
            })
            .then(resp => resp.json())
            .then((data) => {
                setNome("")
                setPreco("")
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    const cancelar = () => {
        setNome("")
        setPreco(null)
    }

    return (
        <Fragment>
            <div className="text-center">
                <button type="button" className="btn btn-success mt-3" data-toggle="modal" data-target="#main-modal">
                Cadastrar novo item
                </button>
            </div>
            <div className="modal fade" id="main-modal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-success" id="exampleModalLongTitle">Cadastrar um novo item</h5>
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
                        className="btn btn-success" 
                        data-dismiss="modal"
                        onClick={cadastrarItem} 
                    >Cadastrar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default CadastroItem