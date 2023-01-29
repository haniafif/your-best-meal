import styled from "styled-components";

export const Container = styled.div`
    width: 35rem;
    height: 13rem;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: .8rem;
    margin-left: 3rem;
    margin-top: 3rem;

    padding: 1rem;
    transition: ease-in .3s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom:1rem;
    }

    main{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom:1rem;

        width: 100%;

        #foodIco{
            margin-left: 5rem;
            margin-right: -2rem;
            font-size: 2.5rem;
        }
    }

    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    h2{
        margin: 0 auto;
    }

    .flexrow h4{
        margin-inline: .5rem;
    }

    .flexrow{
        align-items: center;
    }

    #descriptionContainer{
        animation: fadeIn 1s;
    }

    #description{
        font-size:2rem;
        margin-block: 1.5rem;
        font-weight: 600;
    }

    #divButtonCard{
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        margin-top:1rem;
        margin-right:1.2rem;
        width: 100%;
    }

    :hover{
        transform: scale(1.04);
        height: 40rem;
    }

    
`