import * as S from './style'

const Subtitle = ({ children, font, color }) => {
  return (
    <S.Subtitle font={font} color={color}>
      {children}
    </S.Subtitle>
  )
}

export default Subtitle;
