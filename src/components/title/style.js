import styled, { css } from "styled-components";

const colors = {
  light: () => css`
    color: #ECEFF4;
  `,
  dark: () => css`
    color:#3B4252;
  `,
}

export const Title = styled.h1`
  ${({ color }) => css`
    ${!!color && colors[color]}
  `}
  font-size: 40px;
  font-style: italic;
  margin: 0;
  font-family: 'Lato', sans-serif;
  line-height: 50px;
  font-weight: 300;
`