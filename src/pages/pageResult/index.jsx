import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { fetchUserData, fetchRepoData } from '../../api/index'

import SideBar from '../../components/pageSearchComponents/SideBar';
import Repository from '../../components/pageSearchComponents/Repositorys'
import RepositorysMap from '../../components/pageSearchComponents/RepositorysMap'

import * as S from './style';

export const PageResult = () => {

  const [userInfo, setUser] = useState();
  const [userRepoInfo, setUserRepoInfo] = useState();
  const searchedUser = new URLSearchParams(useLocation().search).get('user')

  const userSearched = () => {
  }
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchUserData();
      setUser(data)
      return data;
    }
    const fetchREpo = async () => {
      const data = await fetchRepoData();
      setUserRepoInfo(data)
      return data;
    }
    fetch();
    fetchREpo();
  }, []);

  return (
    <S.Wrapper>
      <SideBar userInfo={userInfo} />
      <RepositorysMap repoInfo={userRepoInfo} />
    </S.Wrapper>
  )
}
