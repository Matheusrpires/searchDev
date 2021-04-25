import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchUserData, fetchRepoData } from '../../api/index'

import SideBar from '../../components/pageSearchComponents/SideBar';

import * as S from './style';

export const PageResult = () => {

  const searchedUser = new URLSearchParams(useLocation().search).get('user')

  const userSearched = () => {

  }

  // useEffect(() => {
  //   const fetch = () =>{
  //     // fetchUserData();
  //     // fetchRepoData()
  // }
  //   fetch()
  // }, []);

  return (
    <S.Wrapper>
      <SideBar />
      Result {!!searchedUser && searchedUser}
    </S.Wrapper>
  )
}
