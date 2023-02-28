import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: "header" "content" "footer";
`

export const Request = styled.div`
    display: flex;
    align-items: center;  
    justify-content: start;
    gap: 1rem;
    margin-top: 2.9rem;
    margin-bottom: 1.8rem;

    > span {
        img {
            width: 10rem;
            height: 10rem;

        }
    }

    > div {
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-bottom: 2rem;
        gap: 0.6rem;
    
        h2 {
            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        button {
            font-family: "Roboto", "serif";
            font-weight: 400;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.TOMATO_400};
            text-align: start;
        }
    }
`

export const Content = styled.main`
    grid-area: content;
    margin: 2rem;
    text-align: start;


    > section {
        font-family: "Poppins", "serif";
        font-size: 3.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-top: 3rem;
    }

    > span {
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
        position: fixed;
        right: 5%;
        bottom: 15%;

        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: clamp(18rem, 21rem, 25rem);

        svg {
            font-size: 1.8rem;
        }
    }
`
