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

    > section {
        position: relative;
        padding: 0 1rem;
        
        > div:first-child {
            white-space: nowrap;
            display: flex;
            align-items: center;
            width: 50rem;
            overflow-x: hidden;
            flex-direction: row;

            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            justify-content: space-between;
        }
    }
`

export const Scrolling = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.5rem;

    ${({ direction }) => direction === 'prev' ? `
        left: 0;
    ` : `
        right: 0;
    `}
`