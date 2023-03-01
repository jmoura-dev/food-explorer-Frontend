import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 0 2.6rem;
    gap: 7rem;

    > div {
        max-width: 70rem;
        h1 {
            font-family: "Roboto", "serif";
            font-size: 4.2rem;
        }
        
        img {
            width: 5rem;
            height: 5rem;
        }
    }

    @media (max-width:819px) {
        

        > div {
            display: none;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 2.4rem;

    > h1 {
        display: none;
    }

    > div:first-child {
        margin-top: 15.8rem;
        margin-bottom: 7.3rem;
    }
    
    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
    }

    > div {
        margin-top: 2px;
        margin-bottom: 3.2rem;
    }

    > button:last-child {
        display: flex;
        justify-content: center;
        margin: 3.2rem auto 5rem;
    }

    @media (min-width:820px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;
        padding: 0 7rem;


        > div:first-child {
            display: none;
        }

        h1 {
            display: flex;
            justify-content: center;
            margin-top: 7.4rem;
            margin-bottom: 4.2rem;
            
            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 3.2rem;
        }
    }

`