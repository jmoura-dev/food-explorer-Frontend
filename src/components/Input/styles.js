import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;
        width: 100%;

        outline: none;

        height: 4.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        padding: 1.2rem 1.4rem;
        border-radius: 0.8rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            font-size: 1.6rem;
            font-weight: 400;

        }
    }
`