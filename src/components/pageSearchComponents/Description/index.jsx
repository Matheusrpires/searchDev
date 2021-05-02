import * as S from './style'

const Description = ({ children, size }) => {
  return (
    <S.Description size={size}>
      {children}
    </S.Description>
  )
}

export default Description;
