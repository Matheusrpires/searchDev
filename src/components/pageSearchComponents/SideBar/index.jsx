import * as S from './style'

import Title from '../../title/index'
import Subtitle from '../Subtitle/index'
import Description from '../Description/index'

const SideBar = () => {
  return (
    <S.Wrapper>
      <S.Img src="https://avatars.githubusercontent.com/u/26113656?v=4" alt="User github profile image" srcset="" />
      <Title color={"light"}>Matheus Rodrigues</Title>
      <Subtitle>@Matheusrpires</Subtitle>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.</Description>
    </S.Wrapper>
  )
}

export default SideBar;