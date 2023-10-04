// Layout

import React, { useContext, useEffect, useState } from 'react'
import { Conteiner } from './styles'

// LOGO
import logoThunder from '../assets/Layout/mini_logo_w100px.svg'

// AVATAR
import avatar from '../assets/Layout/avatar.png'
// ICONE
import { IoBag } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPizza } from "react-icons/io5";
import { IoFlash } from "react-icons/io5";
import { IoShirt } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { PiBootFill } from "react-icons/pi";
import { bootIcon } from '../assets/Layout/icon_boot.svg'



import { useViewPort } from '../hooks/viewPort/useViewPort'

// TENIS
import tenis from '../assets/products/one-white-sneaker-shoe-isolated-white.png'
import { Outlet } from 'react-router-dom';








import { ThemeContext } from '../context/themeContext/ThemeContext';





const Layout = ({ children }) => {

    const { display, type } = useViewPort()
    // const { theme } = useContext(ThemeContext);

    console.log(`Display: ${type.display}`)
    console.log(`Display Width: ${type.width}`)

    const [chargPage, setChargPage] = useState(true)
    


    // console.log(theme)
    








    return (
        <Conteiner>
            {/* HEADER */}
            <div className='boxes'>
                <div className='--i'>
                    <img src={logoThunder} alt="Nine" />
                </div>


                <div className='--i'>


                    {/* PESQUISA */}
                    <div className='search_conteiner'>
                        <div className='--i_btn'>
                            <IoSearch />
                        </div>
                    </div>


                    <div className='indicador'></div>
                </div>


                {/* TERCEIRA AREA */}
                {/* AREA DO AVATAR */}
                <div className='--i'>

                    <div className='--i_boxes'>
                        <AiFillHeart className='icon_' />
                    </div>

                    <div className='--i_boxes'>
                        <IoBag className='icon_' />
                    </div>

                    <div className='--i_boxes'>
                        <img className='avatar' src={avatar} alt="avatar" />
                    </div>




                </div>
            </div>

            {/* MENU ESQUERDO */}
            <div className='boxes'>
                <ul>
                    <li>
                        <IoBag className='--L-Icon' />
                    </li>
                    <li>
                        <IoPizza className='--L-Icon' />
                    </li>
                    <li>
                        <IoFlash className='--L-Icon' />
                    </li>
                    <li>
                        <IoShirt className='--L-Icon' />
                    </li>
                    <li>
                        <PiBootFill className='--L-Icon' />
                    </li>
                </ul>

            </div>

            {/* CONTEUDO DO SITE PALCO PRINCIPAL */}
            <div className='boxes'>
                <Outlet />
            </div>
            
            <div className='boxes'></div>

            {/* FOOTER */}
            <div className='boxes'>
                <div className='footer_indicador'></div>
            </div>

        </Conteiner>
    )
}

export default Layout