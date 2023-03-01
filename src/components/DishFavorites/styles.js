import styled from "styled-components";

export const Container = styled.div`
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
        text-align: left;
        margin-bottom: 2rem;
        gap: 0.6rem;

        h2 {
            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        button {
            gap: 0.5rem;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: left;

            font-family: "Roboto", "serif";
            font-weight: 400;
            font-size: 1.3rem;
            color: ${({ theme }) => theme.COLORS.TOMATO_400};

            svg {
                font-size: 1.6rem;
            }
        }
    }
`