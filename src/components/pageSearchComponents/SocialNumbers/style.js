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
  ${({ imgSize, color }) => css`
    ${!!imgSize && imgOptions[imgSize]}
    filter: brightness(0) invert(${!!color && color === "darker" ? '0' : '1'});
  `}
`

export const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #8190A5;
  border-radius: 50%;
  display: inline-block;
  margin-right: .8rem;
`