import React from 'react'




import { IoBag } from "react-icons/io5";

import { AiFillHeart } from "react-icons/ai";





const MenuHeader = () => {
    return (
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
    )
}

export default MenuHeader