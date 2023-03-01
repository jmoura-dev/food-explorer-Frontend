import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    grid-area: header;
    width: 100%;
    height: 11.4rem;
    padding: 0 2.7rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    position: fixed;
    z-index: 1;
`

export const WindowMobile = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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

export const WindowDesktop = styled.main`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    gap: 1rem;


        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 50rem;
            
            img {
                width: 3rem;
                height: 3rem;
            }

            button {
                width: clamp(2rem, 2rem ,);
                font-family: "Roboto", "serif";
                font-size: clamp(1.6rem, 2.4rem, 2.4rem);
                font-weight: bold;
            }
        }

        > div {
            width: clamp(22rem, 33rem, 40rem);
        }


        button {
            display: block;
            font-family: "Roboto", "serif";
            font-weight: 500;
            font-size: clamp(1.4rem, 1.6rem, 1.8rem);
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            svg {
                font-size: 2.4rem;
            }
        }

        button:nth-child(5) {
            width: clamp(15rem, 17rem, 18.7rem);

            font-family: "Poppins", "serif";
            font-weight: 500;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
`