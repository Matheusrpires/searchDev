import * as S from './style'

import Title from '../../title/index'
import Subtitle from '../Subtitle/index'
import Description from '../Description/index'
import SocialNumbers from '../SocialNumbers/index'
import Button from '../../Button/index'

const SideBar = ({ userInfo }) => {

  const userProgile = () => {
    return !!userInfo ?
      <>
        <S.Img src={userInfo.avatar_url} alt="User github profile image" srcset="" />
        <Title color={"light"}>{userInfo.login}</Title>
        {!!userInfo.login && <Subtitle font='medium'>@{userInfo.login}</Subtitle>}
        <Description>{userInfo.bio}</Description>
        <S.Number>
          {!!userInfo.followers && <SocialNumbers size="small">{userInfo.followers} followers</SocialNumbers>}
          {!!userInfo.following && <SocialNumbers size="small">{userInfo.following} following</SocialNumbers>}
          {!!userInfo.company && <SocialNumbers size="small"> stars</SocialNumbers>}
        </S.Number>
        <S.SocialNetwork>
          {!!userInfo.company && <SocialNumbers size="medium">{userInfo.company}</SocialNumbers>}
          {!!userInfo.location && <SocialNumbers size="medium">{userInfo.location}</SocialNumbers>}
          {!!userInfo.email && <SocialNumbers size="medium">{userInfo.email}</SocialNumbers>}
          {!!userInfo.blog && <SocialNumbers size="medium">{userInfo.blog}</SocialNumbers>}
          {!!userInfo.twitter_username && <SocialNumbers size="medium">@{userInfo.twitter_username}</SocialNumbers>}
        </S.SocialNetwork>
        <S.Back href="/"><Button style="mediumWhite">Voltar</Button></S.Back>
      </>
      :
      `
    Error
    `
  }
  return (
    <S.Wrapper>
      {userProgile()}
    </S.Wrapper>
  )
}

export default SideBar;