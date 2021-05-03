import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 3rem); */
  background-color:#3B4252;
  /* width: 400px; */
  /* max-width: 50vw; */
  /* width: 450px; */
  width: 37%;
  padding-top: 3rem;
  padding-left: 25px;
  padding-right: 25px;
`

export const Img = styled.img`
  width: 298px;
  max-width: 75%;
  margin-bottom: 2rem;
  align-self: center;
`

export const Number = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SocialNetwork = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13rem;
  margin-bottom: 3rem;
`

export const Back = styled.a`
  display: contents;
  text-decoration: none;
`

export const Error = styled.div`
  margin: 0 auto;
`

export const ErrorA = styled.a`
  color: #ECEFF4;
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  line-height: 50px;
`