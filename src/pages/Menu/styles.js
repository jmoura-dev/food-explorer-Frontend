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

    > div {
        margin: 0 2.8rem;
        border-radius: 0.5rem;
    }

    > section {
        margin-bottom: 4rem;

        button {
            margin-top: 4rem;
            font-family: "Poppins";
            font-weight: 300;
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`