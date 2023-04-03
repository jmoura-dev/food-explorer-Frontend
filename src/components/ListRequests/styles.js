import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  width: 100%;
  height: 8rem;

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2.5rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top: none;

    select {
      padding: 1.5rem 2rem;
      width: 100%;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border: none;
      outline: none;
      border-radius: 3px;

      font-size: 1.4rem;
      font-weight: 400;
      font-family: "Roboto", "serif";

      :hover {
        cursor: pointer;
      }
    }
    
    .pendent:before {
      content: "•";
      color: red;
      background: red;
      position: absolute;
      top: 50%;
    }

  }

  li {
    display: flex;
    gap: 6rem;
    flex-direction: column;

    font-family: "Roboto", "serif";
    font-size: 1.5rem;
    font-weight: 400;

  }
`