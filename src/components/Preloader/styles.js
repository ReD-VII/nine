import { styled } from "styled-components";




export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    background: #040305;
    transition: ease;
    overflow: hidden ;

    img{
        width: 35%;
        opacity: 0;
        animation: logoEfects 1.5s linear forwards;
        animation-delay: 2s;
    }
    
    .box{
        padding-top: 100px;
        .loader {   
            border: 4px solid #ccc;
            border-left-color: transparent;
            border-radius: 50%;
        }
        .loader {
            border: 4px solid #ccc;
            border-left-color: transparent;
            width: 36px;
            height: 36px;
        }
        .loader {
            border: 4px solid #ccc;
            border-left-color: transparent;
            width: 36px;
            height: 36px;
            animation: spin89345 1s linear infinite;
        }







        @keyframes spin89345 {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

    




    @media screen and (max-width: 768px) {
        img{
            width: 70%;
        }

        /* Adicione mais estilos conforme necessário para telas menores */
    }
    
    &:after{
        content: '';
        position: absolute;
        width: 50%;
        height: 20px;
        margin: auto;
        top: -10px;
        left: 40px;
        right: 0px;
        transform: skewx(-50deg);
        border: 1px solid #ccc;
        background: #FFFF00;
    }
    &::before{
        content: '';
        position: absolute;
        width: 50%;
        height: 20px;
        /* background: #040305; */
        background: #161518;
        margin: auto;
        left: 0;
        right: 40px;
        top: -10px;
        z-index: 10;
        transform: skewx(50deg);
        border: 1px solid #ccc;
        /* border-right: 1px solid #040305; */
    }
    
    @keyframes logoEfects {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @keyframes spin89345 {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }



`
