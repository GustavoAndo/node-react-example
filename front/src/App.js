import React from 'react'
import TabelaCompras from './components/TabelaCompras'
import CadastroItem from './components/CadastroItem'

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Lista de Compras</h1>
        <CadastroItem></CadastroItem>
        <TabelaCompras></TabelaCompras>
      </div>
    </>
  );
}

export default App;
