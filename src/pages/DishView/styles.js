import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "footer"; 
    grid-template-rows: 11.4rem auto 7.7rem;
`

export const Content = styled.main`
    grid-area: main;
    padding: 3.6rem 4rem;

    > button {
        display: flex;
        align-items: center;
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 3rem;
        }
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin-top: 1.6rem;
            margin-bottom: 1.6rem;
            width: 26.4rem;
            height: 26.4rem;
        }

        h1 {
            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 2.7rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin-bottom: 2.4rem;
        }

        p {
            font-family: "Poppins", "serif";
            font-weight: 400;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin-bottom: 2.7rem;
        }
    }

    > div:nth-child(3) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2.3rem;
    }

    > footer {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        gap: 1.9rem;

        button:nth-child(1), button:nth-child(3) {
            border: none;
            background: none;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 2.3rem;
        }

        > span {
            position: relative;
            font-family: "Roboto", "serif";
            font-weight: bold;
            font-size: 2.26rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        button:last-child{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 7px;

            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 1rem;

            svg {
                font-size: 2rem;
            }
        }
    }
`