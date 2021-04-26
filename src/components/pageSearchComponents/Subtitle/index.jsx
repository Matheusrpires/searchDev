import * as S from './style'

const Subtitle = ({ children, font }) => {
  return (
    <S.Subtitle font={font}>
      {children}
    </S.Subtitle>
  )
}

export default Subtitle;
