import * as S from './style'

const Button = ({ children, type, imgStatus, style}) => {

  return (
    <>
      <S.Button type={type} buttonType={style}>
        <S.Img imgStatus={imgStatus} src="./img/lupa.png" />
          {children}
      </S.Button>
    </>
  )
}

export default Button;