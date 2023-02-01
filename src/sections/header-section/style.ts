import styled from "styled-components";

export const Container_header = styled.div`
    width: 100%;
    height: 90px;
    background-color: var(--color-background);

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;

    nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: -13rem;
        a{
            margin-right: 3rem;
            text-decoration:none;
            text-decoration-color:none;
        }
    }

    #logo{
        height: 100px;
        width: 100px;
    }
`