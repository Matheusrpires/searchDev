import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3rem);
  background-color:#3B4252;
  width: 400px;
  max-width: 50vw;
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