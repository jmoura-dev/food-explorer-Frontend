import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: "header" "content" "footer";
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
        width: clamp(15rem, 18rem, 22rem);

        svg {
            font-size: 1.8rem;
        }
    }
`
