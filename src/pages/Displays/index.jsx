import React, { useState } from 'react'
import { Conteiner } from './styles'

const Displays = () => {


  const [states, setStates] = useState({
    justfContent: '',
    alingItens: ''
  })



  return (
    <Conteiner states={states.justfContent} stales2={states.alingItens}>

      <div className='capsules'>
          <h2>Alinhamentos</h2>

          <label>
            Aling Itens
            <select onChange={(e) => setStates({...states, alingItens: e.target.value})}>
              <option value="start">START</option>
              <option value="center">CENTER</option>
              <option value="end">END</option>
            </select>
          </label>

          <label>
            Justfy Itens
            <select onChange={(e) => setStates({...states, justfContent: e.target.value})}>
              <option value="start">START</option>
              <option value="center">CENTER</option>
              <option value="end">END</option>
            </select>
          </label>

          <div className='boxe'>
              <div className='--i'>1</div>           
              <div className='--i'>2</div>           
              <div className='--i'>3</div>           
              <div className='--i'>4</div>           
          </div>
      </div>


      <div className='capsules'>
          <h2>Alinhamentos</h2>

          <label>
            Aling Itens
            <select onChange={(e) => setStates({...states, alingItens: e.target.value})}>
              <option value="start">START</option>
              <option value="center">CENTER</option>
              <option value="end">END</option>
            </select>
          </label>

          <label>
            Justfy Itens
            <select onChange={(e) => setStates({...states, justfContent: e.target.value})}>
              <option value="start">START</option>
              <option value="center">CENTER</option>
              <option value="end">END</option>
            </select>
          </label>

          <div className='boxe'>
              <div className='--i'>1</div>           
              <div className='--i'>2</div>           
              <div className='--i'>3</div>           
              <div className='--i'>4</div>           
          </div>
      </div>

    </Conteiner>
  )
}

export default Displays