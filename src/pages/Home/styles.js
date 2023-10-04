import styled from "styled-components";


import bgImage from '../../assets/Home/bg_text.gif'
import bgImageMobile from '../../assets/Home/bg_text.mobile.gif'




export const Conteiner = styled.div`
    width: 100%;
    height: 100%;




    .--iHome_presentation_one_conteiner{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;


        .--iDbox{
            width: 100%;
            height: 100%;
            /* background: yellow; */
        }


        /* TEXTO */
        .--iDbox:nth-child(1){
            position: absolute;
            /* background: tomato; */
            z-index: 1;
            p{
                font-size: 19em;
                font-weight: 900;
                line-height: 1.6em;
                color: transparent;

                background-image: url(${bgImage });
                background-clip: text;
                -webkit-background-clip: text; /* Para navegadores baseados em Webkit, como o Safari */
                text-fill-color: transparent; 
                background-size: cover;


                animation: moveImage 30s linear infinite;
    
                /* opacity: 0.8; */
                    
                @keyframes moveImage {
                    0% {
                        background-position: center bottom;
                    }
                    100% {
                        background-position: center top;
                    }
                }
            }
        }
        .--iDbox:nth-child(2){
            position: absolute;
            /* background: blue; */
            z-index: 2;

            img{
                width: 600px;
                margin-top: 40px;
            }
        }
    }

`   

// export const Conteiner = styled.div`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     width: 100%;
//     height: auto;
    
//     /* background: red; */
    
//     .most{
//         width: 100%;
//         height: 800px;
//         background: blueviolet;
//     }


// `
// export const TextBase = styled.h4`
//     position: absolute;
//     margin: auto;
//     top: 10%;
//     left: 0;
//     right: 0;
//     bottom: 0;
    
//     color: transparent;
//     font-size: 15em;
//     letter-spacing: -4px;
//     line-height: 0.8em;
//     font-weight: 1000;
//     //-webkit-text-stroke: 2px white; /* Espessura e cor da borda */
//     //text-stroke: 2px transparent; /* Espessura e cor da borda */

//     background-image: url(${bgImageMobile});
//     background-clip: text;
//     -webkit-background-clip: text; /* Para navegadores baseados em Webkit, como o Safari */
//     /* text-fill-color: transparent; */
//     background-size: cover;
    
//     animation: moveImage 30s linear infinite;
    
//     /* opacity: 0.8; */
    
//     @media (max-width: 768px) {
//         font-size: 7em;
//         letter-spacing: 0px;
//         line-height: 1em;
//         font-weight: 1000;
//         background-size: auto;
//         background-image: url(${bgImageMobile});
        
//     }


//     @keyframes moveImage {
//         0% {
//             background-position: center bottom;
//         }
//         100% {
//             background-position: center top;
//         }
//     }
//     /////////
// `
// export const ImgProduct = styled.img`

//     width: 45%;
//     margin: auto;
//     margin-right: 20px;


    


//     z-index: 2;



//     @media (max-width: 768px) {
//         width: 90%;
//         margin: auto;
//         margin-bottom: 20px;
//     }
// `