import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: 11.4rem auto 7.7rem;
`

export const Content = styled.main`
    grid-area: main;

    width: 100%;
    padding: 0 1.6rem;
    margin: 0 auto;
`