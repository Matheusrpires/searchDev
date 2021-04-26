import styled, { css } from "styled-components";

const imgOptions = {
  small: () => css`
    width: 30px;
    height: 30px;
  `,
  medium: () => css`
    width: 36px;
    height: 36px;
    margin-right: 1rem;
  `
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  ${({imgSize}) => css`
    ${!!imgSize && imgOptions[imgSize]}
  `}
  filter: brightness(0) invert(1);
`