import React from 'react'
import { Conteiner } from './styles'

import logoPreload from '../../assets/Preloader/logo_preload_480x167.svg'



const Preloader = () => {
    return (
        <Conteiner>

            <img src={logoPreload} alt="" />

            <div className='box'>
                <div className='loader'></div>
                <div className='loader_thw'></div>
            </div>
           
        </Conteiner>
    )
}

export default Preloader



// <img src={logoPreloader} alt="logo" className='logo' />
