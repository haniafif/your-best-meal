import styled from "styled-components";

export const Container = styled.div`
    width: 35rem;
    height: 10rem;
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

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    main{
        display: flex;
        flex-direction: row;
        align-items: center;

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

    
`