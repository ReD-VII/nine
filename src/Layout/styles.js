import styled from "styled-components";


const styles = {
    borda: '1px dashed #00ff0044'
}



export const Conteiner = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 70px 1fr 70px ; //COLUNAS || Primeira coluna com 70px de largura / segunda colula 100% / terceira coluna 70px
    grid-template-rows: 60px 1fr 20px ; // LINHAS -----  Primeira linha com 70px "area do cabeçalho" segunda coluna ocupando 100% do espaço disponivel e a terceira colula ocupando 20px "footer"
    box-sizing: border-box;
    grid-template-areas: 
        "header header header"
        "left-sidebar content right-sidebar"
        "footer footer footer"
    ;

    

    width: 100%;
    height: 100vh;





    
    /* background: rgb(255,168,1);
    background: -moz-linear-gradient(282deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    background: -webkit-linear-gradient(282deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    background: linear-gradient(282deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffa801",endColorstr="#ff6d00",GradientType=1); */

    
    background: rgb(255,168,1);
    background: -moz-linear-gradient(143deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    background: -webkit-linear-gradient(143deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    background: linear-gradient(143deg, rgba(255,168,1,1) 18%, rgba(255,109,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffa801",endColorstr="#ff6d00",GradientType=1);
    
    
    /* background: rgb(131,58,180);
    background: -moz-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1); */




    
    overflow: hidden;


   

   













    /* GERAL BOXES */
    .boxes {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        z-index: 3;
    }



     /* HEADER */
    .boxes:nth-child(1) {
        
        flex-direction: row;
        grid-area: header;
        /* background: blue; */
        height: 60px;
        z-index: 5;

        div{
            display: flex;
            height: 100%;
        }

        /* AREA DO LOGO */
        .--i:nth-child(1){
            display: flex;
            justify-content: start;
            align-items: center;
            width: 30%;
            /* background: orange; */

            /* LOGO */
            img{
                width: 50px;
                /* margin-top: 10px; */
                margin-left: 40px;
                animation: logoAnimation .2s ease-out forwards;
                animation-delay: 2s;
                cursor: pointer;
            }

            /* ANIMAÇÃO DO LOGO */
            @keyframes logoAnimation {
                0%{
                    transform: scale(0);
                }
                80%{
                    transform: scale(1.5);
                    filter: blur(5px);
                }
                90%{
                    transform: scale(.5);
                }
                100%{
                    transform: scale(1);

                }
            }


        }
        
        /* BOTAO DE PESQUISA/PROCURA */
        .--i:nth-child(2){
            position: relative;
            align-items: end;
            justify-content: center;
            width: 40%;
            /* background: blue; */
            

            .search_conteiner{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 250px;
                height: 100%;
                margin: auto;
                margin-right: 0;
                /* background: green; */

 
                .--i_btn{
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        width: 20%;
                        height: 100%;
                        /* background: blueviolet; */

                        
                        color: white;
                        font-size: 1.5em;
                }





            }



            .indicador{
                position: absolute;
                width: 60px;
                height: 3px;
                background: white;
                border-radius: 50px;
            }
            




        }

        /* TERCEIRA AREA */
        .--i:nth-child(3){
            display: flex;
            flex-direction: row;
            width: 30%;
            /* background: green; */


            div{
                display: flex;
                align-items: center;
                height: 100%;




                .icon_{
                    font-size: 1.3em;
                    color: white;
                    margin-left: 30px;
                }
                .avatar{
                    width: 50px;
                    margin-right: 20px;
                }
            }
            div:nth-child(1){
                width: 100%;
                /* background: red; */
                justify-content: right;
                
            }
            div:nth-child(2){
                width: 100%;
                /* background: aliceblue; */
                justify-content: left;
                
                
            }
            div:nth-child(3){
                width: 100%;
                /* background: darkblue; */
                justify-content: end;
            }



        }

        @media (max-width: 768px) {
            .icon_{
                display: none;
            }
        }



    }
  



    /* MENU LATERAL ESQUERDA */
    .boxes:nth-child(2) {
        grid-area: left-sidebar;
        /* background: blue; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul{

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            width: 100%;
            height: 70%;
            margin: auto;
            margin-top: 0;
            margin-bottom: 0;
            /* background: red; */


                li{
                    color: white;
                    text-decoration: none;
                    list-style: none;
                    margin: 15px auto;
                    margin-right: 5px;
                    cursor: pointer;
                    z-index: 2;
                    font-size: 1.2em;



                    /* .--L-Icon{
                        box-shadow: 2px 2px 2px 2px #000;
                    } */
                }
                


            }
    }

  



    /* AREA CENTRAL DO SITE CONTEUDO */
    .boxes:nth-child(3) {
        grid-area: content;
        overflow: scroll;
        width: 100%;
        height: 100%;
        scrollbar-width: none; /* Para navegadores Firefox */
        scrollbar-width: none; /* Para navegadores Firefox */
        -ms-overflow-style: none; /* Para navegadores IE/Edge */

        scrollbar-width: thin; /* Para navegadores que suportam a propriedade scrollbar-width */
        scrollbar-color: transparent transparent; /* Define a cor da barra de rolagem como transparente */
    }
  
    .boxes:nth-child(3)::-webkit-scrollbar {
        width: 0px; /* Largura da barra de rolagem */
        height: 0;
    }

    .boxes:nth-child(3)::-webkit-scrollbar-thumb {
        background-color: transparent; /* Cor da "thumb" (o indicador que você arrasta) */
    }






















    /* MENU LATERAL DIREITA */
    .boxes:nth-child(4) {
        grid-area: right-sidebar;
        /* background: tomato; */
    }
  

    /* FOOTER */
    .boxes:nth-child(5) {
        position: relative;
        align-items: start;
        justify-content: center;
        grid-area: footer;
        /* background: green; */



        .footer_indicador{
            position: absolute;
            width: 150px;
            height: 2px;
            background: white;
            margin: auto;
            top: 0;
            left: 0px;
            right: 0px;


            border-radius: 50px;
            animation: indicador_efects 5s ease-out infinite;
        }


        @keyframes indicador_efects {
            0%{
                width: 150px;
            }
            25%{
                width: 50px;
            }
            50%{
                width: 300px;
            }
            75%{
                width: 50px;
            }
            100%{
                width: 150px;
            }
        }
    }















    @media (max-width: 768px) {
        
        /* ALINHAMENTO DO LAYOUT PARA MOBILE */
        grid-template-areas: 
            "header header header"
            "content content content"
            "footer footer footer"
        ;

        /* HEADER */
        .boxes:nth-child(1) {

            /* AREA DO LOGO */
            div:nth-child(1){
                

                /* LOGO */
                img{
                    width: 50px;
                    margin-top: 10px;
                    margin-left: 20px;
                    animation: logoAnimation .2s ease-out forwards;
                    animation-delay: 2s;
                }

                


            }
            
            div:nth-child(2){
                width: 40%;
                /* background: blue; */
                


                




            }

            div:nth-child(3){
                width: 30%;
                /* background: green; */
                
            }


        }

        /* MENU LATERAL ESQUERDA */
        .boxes:nth-child(2) {
            display: none;
        }
        /* MENU LATERAL DIREITA */
        .boxes:nth-child(4) {
            display: none;
        }




    }






`