import React, { Fragment, useState } from 'react'

function CadastroUsuario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [numJogos, setNumJogos] = useState("")
    const [dinheiro, setDinheiro] = useState("")
  
    const cadastrarUsuario = async e => {
      e.preventDefault();
      try {
        const body = { nome, email, numJogos, dinheiro };
        const response = await fetch('http://localhost:3001/cadastrarUsuario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        console.log(response)
        window.location = '/'
      } catch (err) {
        console.error(err.message);
      }
    };

    const cancelar = () => {
        setNome("")
        setEmail("")
        setNumJogos("")
        setDinheiro("")
    }

    return (
        <Fragment>
            <div className="text-center">
                <button type="button" className="btn btn-success mt-3" data-toggle="modal" data-target="#main-modal">
                Cadastrar novo usuário
                </button>
            </div>
            <div className="modal fade" id="main-modal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-success" id="exampleModalLongTitle">Cadastrar um novo usuário</h5>
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
                        type='email' 
                        placeholder='Email' 
                        className='form-control mb-2' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type='number' 
                        placeholder='Número de Jogos' 
                        className='form-control mb-2' 
                        value={numJogos}
                        onChange={e => setNumJogos(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Dinheiro' 
                        className='form-control mb-2' 
                        value={dinheiro}
                        onChange={e => setDinheiro(e.target.value)}
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
                        onClick={cadastrarUsuario} 
                    >Cadastrar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default CadastroUsuario