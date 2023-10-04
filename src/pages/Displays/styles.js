import { styled } from "styled-components";



export const Conteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .capsules{
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
        color: #fff;

        .boxe{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            align-items: ${(props) => props.stales2};
            justify-items: ${(props) => props.states};

            width: 250px;
            height: 250px;
            border: 1px dashed #ccc;



            .--i{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                background: red;
                font-weight: 700;
            }
            
        }

        
    }




`