import styled from "styled-components";

export const Container = styled.div`
    min-width: 21rem;
    height: 31.5rem;

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
        transform: scale(1.03);
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
            top: 1.5rem;
            right: -8rem;
        }
    }

    > span {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};

        margin-bottom: 3rem;
    }

    @media (min-width: 900px) {
        min-width: 23rem;
    }
`

export const DishImage = styled.button`
    background: none;
    border: none;
    margin: 0 auto;
    > img {
        width: 13rem;
        height: 13rem;

        border-radius: 999px;
    }
`