import React, { Fragment, useState } from 'react'

function EditarUsuario({ usuario }) {
    const [nome, setNome] = useState(usuario.nome)
    const [email, setEmail] = useState(usuario.email)
    const [numJogos, setNumJogos] = useState(usuario.num_jogos)
    const [dinheiro, setDinheiro] = useState(usuario.dinheiro)
    const [dataCadastro, setDataCadastro] = useState(usuario.data_cadastro.split('T')[0])
  
    const editarUsuario = async e => {
      e.preventDefault();
      try {
        const body = { nome, email, numJogos, dinheiro, dataCadastro };
        const response = await fetch('http://localhost:3001/editarUsuario/' + usuario.id, {
          method: 'PUT',
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
        setNome(usuario.nome)
        setEmail(usuario.email)
        setNumJogos(usuario.numJogos)
        setDinheiro(usuario.email)
        setDataCadastro(usuario.dataCadastro)
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${usuario.id}`}>
            Editar
            </button>
            <div className="modal fade" id={`id${usuario.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-primary" id="exampleModalLongTitle">Editar dados do usuário</h5>
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
                    <input 
                        type='date' 
                        placeholder='Data de Cadastro' 
                        className='form-control mb-2' 
                        value={dataCadastro}
                        onChange={e => setDataCadastro(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        data-dismiss="modal" 
                        onClick={cancelar}                   
                    >Cancelar</button>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-dismiss="modal"
                        onClick={editarUsuario} 
                    >Editar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditarUsuario;