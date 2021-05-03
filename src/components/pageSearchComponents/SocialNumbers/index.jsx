import Subtitle from '../Subtitle/index'

import * as S from './style'

const SocialNumbers = ({ children, size, color, icon }) => {

  const checkImg = () => {
    return !!icon ?
      <>
        <S.Img imgSize={size} color={color} src={`./img/${icon}.png`} alt="" />
      </>
      :
      <>
        <S.Dot></S.Dot>
      </>
  }

  return (
    <S.Wrapper>
      {checkImg()}
      <Subtitle font={size} color={color}>{children}</Subtitle>
    </S.Wrapper>
  )
}

export default SocialNumbers;