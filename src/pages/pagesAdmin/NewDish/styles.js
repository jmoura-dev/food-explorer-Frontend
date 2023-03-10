import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "form" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;
`


export const Form = styled.form`
  grid-area: form;
  padding: 1.1rem 3.2rem;
  width: 100%;
  max-width: 136.6rem;
  margin: 0 auto;

  > button:first-child {
    font-family: "Poppins", "serif";
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.3rem;
    }
  }

  > h1 {
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 2.2rem 0 1.2rem;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
    display: block;

    margin-top: 2.4rem;
    margin-bottom: 1rem;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  > input, textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;

    border: none;
    width: 100%;
    padding: 1.2rem 3.2rem;
    outline: none;

    border-radius: 8px;
    appearance: none;
    resize: none;
  }

  input {
    height: 4.8rem;
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

  .ingredients {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-radius: 8px;

    min-height: 4.8rem;
    padding: 0.8rem;
  }


  > button:last-child {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    margin: 2.4rem auto;

    max-width: 136.6rem;
    width: 100%;
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
    margin: 0;

    svg {
      font-size: 2.4rem;
    }
    
    cursor: pointer;
  }
`