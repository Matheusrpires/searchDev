import * as S from './style'

const Title = ({children, color}) => {
  return (
    <S.Title color={color}>
      {children}
    </S.Title>
  )
}

export default Title;