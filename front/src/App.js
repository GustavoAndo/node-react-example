import React , { Fragment } from 'react'
import './App.css';

// imports
import TabelaUsuarios from './components/TabelaUsuarios'
import CadastroUsuario from './components/CadastroUsuario'

function App() {
  return (
    <Fragment>
      <div class="container">
        <h1 className="text-center mt-5">Tabela Usuarios</h1>
        <CadastroUsuario></CadastroUsuario>
        <TabelaUsuarios></TabelaUsuarios>
      </div>
    </Fragment>
  );
}

export default App;
