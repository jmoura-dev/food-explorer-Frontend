import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 2.6rem;

    > div:first-child {
        margin-top: 15.8rem;
        margin-bottom: 7.3rem;
    }
    
    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
    }

    > div {
        margin-top: 2px;
        margin-bottom: 3.2rem;
    }

    > button:last-child {
        display: flex;
        justify-content: center;
        margin: 3.2rem auto;


    }

`