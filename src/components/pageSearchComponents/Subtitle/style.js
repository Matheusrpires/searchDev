import styled, { css } from "styled-components";

const fonts = {
  small: () => css`
    font-size: 20px;
    line-height: 26px;
  `,
  medium: () => css`
    font-size: 28px;
    line-height: 34px;
  `,
}

export const Subtitle = styled.span`
  ${({ font }) => css`
    ${!!font && fonts[font]}
  `}
  color: #ECEFF4;
  font-style: italic;
  font-family: 'Lato',sans-serif;
  font-weight: 300;
`