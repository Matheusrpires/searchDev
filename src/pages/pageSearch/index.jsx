import * as S from './style'

import Title from '../../components/title/index'
import Form from '../../components/Form/index'

export const PageSearch = () => {
  return (
    <S.Wrapper>
      <Title color="dark">Search Devs</Title>
      <Form/>
    </S.Wrapper>
  )
}