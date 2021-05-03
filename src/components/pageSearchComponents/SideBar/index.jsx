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
          {!!userInfo.followers && <SocialNumbers size="small" icon="people">{userInfo.followers} followers</SocialNumbers>}
          {!!userInfo.following && <SocialNumbers size="small" icon="heart">{userInfo.following} following</SocialNumbers>}
          {!!userInfo.company && <SocialNumbers size="small" icon="star"> stars</SocialNumbers>}
        </S.Number>
        <S.SocialNetwork>
          {!!userInfo.company && <SocialNumbers size="medium" icon="building">{userInfo.company}</SocialNumbers>}
          {!!userInfo.location && <SocialNumbers size="medium" icon="location">{userInfo.location}</SocialNumbers>}
          {!!userInfo.email && <SocialNumbers size="medium" icon="mail">{userInfo.email}</SocialNumbers>}
          {!!userInfo.blog && <SocialNumbers size="medium" icon="link">{userInfo.blog}</SocialNumbers>}
          {!!userInfo.twitter_username && <SocialNumbers size="medium" icon="twitter">@{userInfo.twitter_username}</SocialNumbers>}
        </S.SocialNetwork>
        <S.Back href="/"><Button style="mediumWhite">Voltar</Button></S.Back>
      </>
      :
      <S.Error>
        <S.ErrorA>Usuário nao encontrado</S.ErrorA>
        <S.Back href="/"><Button style="mediumWhite">Voltar</Button></S.Back>
      </S.Error>
  }
  return (
    <S.Wrapper>
      {userProgile()}
    </S.Wrapper>
  )
}

export default SideBar;