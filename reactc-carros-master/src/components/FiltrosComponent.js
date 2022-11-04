import React from 'react'

function FiltrosComponent() {
  return (
    <div>
      <label id='MONTADORA'>Montadora</label>
      <select name="montadora" id='selectMontadora'>Montadora
      <option value='Fiat'>Fiat</option>
      <option value='Honda'>Honda</option>
      <option value='Ford'>Ford</option>
      </select>

      <label id='COR'>Montadora</label>
      <select name="cor" id='selectCor'>Cor
      <option value='cinza'>Cinza</option>
      <option value='azul'>Azul</option>
      <option value='vermelho'>Vermelho</option>
      </select>

      <input type='number' id="inputAno" placeholder='Ano'></input>
    
      <input type='number' id="inputEstoque" placeholder='estoque'></input>
    </div>
  )
}

export default FiltrosComponent