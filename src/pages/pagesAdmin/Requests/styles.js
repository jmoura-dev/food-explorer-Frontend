import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: "header" "content" "footer";
`

export const Content = styled.main`
    grid-area: content;
    padding: 2rem;
    text-align: start;

    @media(min-width: 820px) {
            margin: 0 auto;
    }

    > button:first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.7rem;
    }

    > section {
        max-width: 136.6rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-family: "Poppins", "serif";
        font-size: 3.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-top: 3rem;



        ul {
            max-height: 55vh;
            overflow: auto;
            margin-bottom: 2rem;
            padding-right: 1rem;

            ::-webkit-scrollbar {
                background-color: none;
                width: 0.7rem;
            }
            
            ::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
                border-radius: 1rem;

            }
            @media(min-width: 820px) {
                display: flex;
                flex-direction: row;
                width: 100%;

                gap: 2rem;
                flex-wrap: wrap;
            }
        }

    }

    > span {
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button:last-child {
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
