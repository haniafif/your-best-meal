import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 7rem;

    h1{
        font-weight: 600;
    }

    h3{
        font-size: 1.5rem;
        margin-top: 1.5rem;
        color: var(--color-tertiary);
    }

    #filters{
        display: flex;
        flex-direction: row;
    }

    #input_home{
        margin-top: 1.5rem;
        border-radius: .4rem;
        padding: 1.2rem;
        padding-block: 1rem;
        width: 400px;
        margin-right: 1rem;
        border-width: .1rem;
    }

    #input_distance{
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
        border-radius: .4rem;
        padding: 1.2rem;
        padding-block: 1rem;
        width: 80px;
        margin-inline: 1rem;
        border-width: .1rem;
    }

    #input_price{
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
        border-radius: .4rem;
        padding: 1.2rem;
        padding-block: 1rem;
        width: 80px;
        margin-inline: 1rem;
        border-width: .1rem;
    }

    #input_rating{
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
        border-radius: .4rem;
        padding: 1.2rem;
        padding-block: 1rem;
        width: 80px;
        margin-inline: 1rem;
        border-width: .1rem;
    }

    #input_cuisine{
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
        border-radius: .4rem;
        padding: 1.2rem;
        padding-block: 1.3rem;
        width: 100px;
        margin-inline: 1rem;
        border-width: .1rem;
    }

    .centerDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        margin-top: 1.5rem;
        label{
            font-weight: 400;
            color: var(--color-tertiary);
        }
    }

    #cards_area{
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 1rem;
        margin-left: 25rem;
        margin-right: 15rem;

    }
`