import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ search }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;
  `
  }
`;