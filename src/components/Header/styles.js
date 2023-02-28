import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 12.4rem;
    padding: 0 2.7rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    position: fixed;
    z-index: 1;
    
    > button {
        background: none;
        border: none;

        svg {
            width: 2.5rem;
            height: 2.5rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > header {
        display: flex;
        align-items:  center;
        gap: 8px;
        padding-bottom: 5px;

        img {
            width: 2.5rem;
            height: 2.5rem;
        }

        button {
            font-family: "Roboto", "serif";
            font-weight: bold;

            font-size: 2.1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > div {
        button {
            background: none;
            border: none;

            svg {
                width: 2.5rem;
                height: 2.5rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }

        span {
            border: none;
            border-radius: 99px;
            padding: 0 5px;

            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 1.4rem;

            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            position: relative;
            top: -1.8rem;
            left: -1rem;
        }
    }
`