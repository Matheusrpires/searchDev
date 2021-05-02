import styled, { css } from "styled-components";

const fonts = {
  small: () => css`
    font-size: 18px;
    line-height: 26px;
  `,
  medium: () => css`
    font-size: 20px;
    line-height: 34px;
  `,
}

export const Subtitle = styled.span`
  ${({ font, color }) => css`
    ${!!font && fonts[font]}
    color: ${!!color && color === 'darker' ? "#3B4252" : "#ECEFF4"};
  `}
  font-style: italic;
  font-family: 'Lato',sans-serif;
  font-weight: 300;
`