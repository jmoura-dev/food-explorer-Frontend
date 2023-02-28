import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "section" "footer";
    grid-template-rows: 11.4rem auto 7.7rem;

    > section {
        margin: 5.6rem 3.5rem 0;


        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 3.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        main {
            margin: 4rem auto 0;
            max-width: 40rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                padding: 7rem;
                width: 100%;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
            }
            div {
                display: flex;
                width: 100%;

                button:first-child {
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-left-radius: 8px;
                }

                button:last-child {
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-right-radius: 8px;
                }
            }}
}
`

export const Form = styled.form`
    grid-area: form;
`