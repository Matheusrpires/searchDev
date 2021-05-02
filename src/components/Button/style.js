import styled, { css } from "styled-components";

const buttonTyps = {
  smallDark: () => css`
    font-size: 22px;
    background-color: #47525E;
    color:#ECEFF4;
    padding: .5rem .9rem;
  `,
  mediumWhite: () => css`
    background-color: #ECEFF4;
    color: #3B4252;
    width: 192px;
    font-size: 18px;
    justify-content: center;
    padding: .9rem .9rem;
    align-self: center;
    margin-bottom: 21px;
  `
}

export const Button = styled.button`
  ${({ buttonType }) => css`
    ${!!buttonType && buttonTyps[buttonType]}
  `}
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Lato;
  font-style: italic;
  font-weight: 300;
  position: relative;
  display: flex;
`

export const Img = styled.img`
  ${({imgStatus}) => css`
    display: ${imgStatus ? "block" : "none"};
  `}
  width: 30px;
  height: 30px;
  filter: brightness(14);
  margin-right: .3rem;
  `