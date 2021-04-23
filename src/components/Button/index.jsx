import * as S from './style'

// import lupa from '../../../public/img/lupa.png'

const Button = ({ children }) => {

  return (
    <>
      <S.Button>
        <S.Img src="./img/lupa.png" />
          {children}
      </S.Button>
    </>
  )
}

export default Button;