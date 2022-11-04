import React from 'react'

function ListaCarrosComponent({lista}) {

  const carros = lista;

  return (
    <>
      <h2>ListaCarrosComponent</h2>
      <div>
        {carros.map(c => {
            return(
            <div class="card">
                <img></img>
                <h1 class='modelo'>{c.modelo}</h1>
                <div class='montadora'>{c.montadora}</div>
                <div class='ano'>{c.ano}</div>
                <div class='estoque'>{c.estoque}</div>
            </div>
        )}
        
        )}
      </div>
    </>
    
  )
}

export default ListaCarrosComponent