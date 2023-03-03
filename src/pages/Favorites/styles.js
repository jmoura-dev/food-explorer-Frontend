import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-areas: "header" "section" "footer";
    grid-template-rows: 11.4rem auto 7.7rem;

    > section {
        margin: 5rem 3rem;
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 3.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        ul {
            overflow: auto;
            max-height: 60vh;
            margin-top: 1rem;
            padding-right: 1rem;


        ::-webkit-scrollbar {
            background-color: none;
            width: 0.7rem;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
            border-radius: 1rem;
        }
        }
    }

    @media (min-width: 800px) {

        section {
            margin: 5rem auto;
            padding: 0 3rem;

            > ul {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                max-width: 136.6rem;
                gap: 1rem;

                flex-wrap: wrap;
            }
        }
    }
`