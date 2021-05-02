import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 4rem;
  padding-top: 2rem;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #3B4252 #FAFAFA;

  &::-webkit-scrollbar {
    width: 12px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #FAFAFA;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3B4252;
    border-radius: 20px;
    border: 3px solid #FAFAFA;
  }

  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px; 
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
  }
`