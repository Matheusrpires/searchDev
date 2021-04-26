import * as S from './style'

import Title from '../../title/index'
import Subtitle from '../Subtitle/index'
import Description from '../Description/index'
import SocialNumbers from '../SocialNumbers/index'
import Button from '../../Button/index'

const SideBar = () => {
  return (
    <S.Wrapper>
      <S.Img src="https://avatars.githubusercontent.com/u/26113656?v=4" alt="User github profile image" srcset="" />
      <Title color={"light"}>Matheus Rodrigues</Title>
      <Subtitle font='medium'>@Matheusrpires</Subtitle>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.</Description>
      <S.Number>
        <SocialNumbers size="small">100 teste</SocialNumbers>
        <SocialNumbers size="small">100 teste</SocialNumbers>
        <SocialNumbers size="small">100 teste</SocialNumbers>
      </S.Number>
      <S.SocialNetwork>
        <SocialNumbers size="medium">organization</SocialNumbers>
        <SocialNumbers size="medium">organization</SocialNumbers>
        <SocialNumbers size="medium">organization</SocialNumbers>
        <SocialNumbers size="medium">organization</SocialNumbers>
        <SocialNumbers size="medium">organization</SocialNumbers>
      </S.SocialNetwork>
      <Button style="mediumWhite">Voltar</Button>
    </S.Wrapper>
  )
}

export default SideBar;