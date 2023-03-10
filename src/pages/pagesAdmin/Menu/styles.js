import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    > header {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        width: 100%;
        height: 11.4rem;
        padding: 5.6rem 2.8rem 2.4rem;
        margin-bottom: 3.6rem;

        svg {
            height: 23px;
            width: 23px;
        }

        h2 {
            font-family: "Roboto", "serif";
            font-weight: 400;
            font-size: 2.1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100}
        }
    }
`

export const Content = styled.main`
    width: 100%;
    max-width: 136.6rem;
    display: flex;
    flex-direction: column;

    @media(min-width: 820px) {
        margin: 0 auto;
    }
    
    > div {
        margin: 0 2.8rem;
        border-radius: 0.5rem;
    }

    > section {
        gap: 2rem;
        margin: 2rem 2.8rem;
        padding: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        button {
            margin-top: 2rem;
            font-family: "Poppins";
            font-weight: 300;
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

        }
    }

`