import styled from "styled-components";

export const Container = styled.div`
    min-width: 23rem;
    max-width: 24rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: none;
    border-radius: 8px;
    padding: 0 2.4rem 2.4rem 2.4rem;
    gap: 1rem;
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

    > h2 {
        font-family: "Poppins", "serif";
        font-weight: 700;
        font-size: 1.9rem;
        white-space: nowrap;
    }

    > p {
        display: none;
    }

    > span {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > footer {
        margin: 0 auto;
        width: 100%;
        margin-top: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1.5rem;

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

    > button{
        height: 3.2rem;
        border-radius: 5px;
        min-width: 16rem;
        width: 100%;
    }
}

@media(min-width: 820px) {
    > footer {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;

        gap: 1rem;

        padding: 0 0.5rem;

        div {
            margin: 0;
        }

        > button{
            min-width: 7rem;
            max-width: 8rem;
        }
    }
    
    > p {
        display: flex;
        flex-wrap: wrap;
        max-width: 17rem;

        text-align: justify;

        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > span {
        font-size: 2.2rem;
    }
}
`

export const DishImage = styled.button`
    background: none;
    border: none;
`