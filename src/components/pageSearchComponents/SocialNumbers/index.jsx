import Subtitle from '../Subtitle/index'

import * as S from './style'

const SocialNumbers = ({children, img, size, imgSize, color}) => {
  return (
    <S.Wrapper>
      <S.Img imgSize={size} color={color} src="./img/Raster.png" alt=""/>
      <Subtitle font={size} color={color}>{children}</Subtitle>
    </S.Wrapper>
  )
}

export default SocialNumbers;