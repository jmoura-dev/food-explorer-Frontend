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

        .paymentFinalize {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 4rem 3rem;

            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            border-bottom-left-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;

            svg {
                width: 9.6rem;
                height: 9.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }

            p {
                margin: 2.4rem auto;
                font-family: "Roboto", "serif";
                font-weight: bold;
                font-size: 2rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }
        }

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
                font-family: "Roboto";
                font-weight: 400;
                font-size: 1.6rem;

                button:first-child {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-left-radius: 8px;
                    font-family: "Roboto";
                    font-weight: 400;
                    font-size: 1.6rem;
                }

                button:nth-child(2) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-right-radius: 8px;
                    font-family: "Roboto";
                    font-weight: 400;
                    font-size: 1.6rem;
                }
            }}
}
`

export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    padding: 5.7rem 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    > label {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 0.5rem;
    }

    > div {
        display: flex;
        gap: 2.5rem;

        label {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-top: 3rem;
    }
        
        div {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }
    }

    > button {
        margin: 3rem 0 0 0;
        border: transparent;
    }
`