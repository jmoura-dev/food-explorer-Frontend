import styled from "styled-components";

export const Container = styled.section`
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 1.8rem;
        margin: 4.6rem 2.8rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
        padding: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`