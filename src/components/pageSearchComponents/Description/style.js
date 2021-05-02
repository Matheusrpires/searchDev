import styled, { css } from "styled-components";

export const Description = styled.p`
  ${({ size }) => css`
    ${!!size && size === "100" ? "max-width: 100%" : "width: 385px"};
  `}
  color: #8190A5;
  font-size: 18px;
  font-family: 'Lato',sans-serif;
  line-height: 28px;
  font-weight: 300;
`