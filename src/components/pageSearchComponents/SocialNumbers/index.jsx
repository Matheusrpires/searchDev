import Subtitle from '../Subtitle/index'

import * as S from './style'

const SocialNumbers = ({children, img, size, imgSize}) => {
  return (
    <S.Wrapper>
      <S.Img imgSize={size} src="./img/Raster.png" alt=""/>
      <Subtitle font={size}>{children}</Subtitle>
    </S.Wrapper>
  )
}

export default SocialNumbers;