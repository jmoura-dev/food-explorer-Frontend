import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "form" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;
`


export const Form = styled.form`
  grid-area: form;
  padding: 1.1rem 3.2rem;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
    display: block;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    border: none;
    width: 100%;
    padding: 1.2rem 3.2rem;
    outline: none;

    border-radius: 8px;
    height: 4.8rem;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-radius: 8px;
    width: 100%;
    padding: 1.2rem 3.2rem;
    outline: none;

    border: none;
  }

  .buttonSelect {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    padding: 1.2rem 3.2rem;
    
    > select {
    border-radius: 8px;
    width: 100%;

    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.4rem;
      
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};


    border: none;
    outline: none;
  }
  }



`

export const UploadImage = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    display: none;
  }
  > label:first-child {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  > label:last-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;

    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 8px;

    svg {
      font-size: 2.4rem;
    }
    
    cursor: pointer;
  }
`