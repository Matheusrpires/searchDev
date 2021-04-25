import * as S from './style'

const Button = ({ children, type}) => {

  return (
    <>
      <S.Button type={type}>
        <S.Img src="./img/lupa.png" />
          {children}
      </S.Button>
    </>
  )
}

export default Button;