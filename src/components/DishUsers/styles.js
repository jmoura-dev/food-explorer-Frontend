import styled from "styled-components";

export const Container = styled.div`
    min-width: 21rem;
    min-height: 29.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: none;
    border-radius: 8px;
    padding: 0 2.4rem 2.4rem 2.4rem;
    gap: 1.2rem;
    margin-top: 2.4rem;
    margin-right: 1.6rem;
    margin-bottom: 2.4rem;

    :hover {
        transform: scale(1.1);
        transition-duration: 0.4s;
    }

    transform: scale(1);
    transition-duration: 0.4s;

    > button:first-child {
        border: none;
        background: none;
        
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            width: 2.4rem;
            height: 2.4rem;

            position: relative;
            top: 2rem;
            right: -7rem;
        }
    }

    > span {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            background: none;
            border: none;

            svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                font-size: 1.8rem;
            }
        }

        span {
            font-family: "Roboto", "serif";
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    > button:last-child{
        height: 3.2rem;
        border-radius: 5px;
    }

    @media (min-width: 900px) {
        min-width: 24rem;
    }
`

export const DishImage = styled.button`
    background: none;
    border: none;
`