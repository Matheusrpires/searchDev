import * as S from "./style"

import Description from '../Description/index'
import SocialNumbers from '../SocialNumbers/index'
import Subtitle from '../Subtitle/index'

const Repository = ({ repoInfo }) => {

  const convertUpdate = (repoDate) => {
    let timeDifference = new Date().getTime() - new Date(repoDate).getTime();
    console.log("time", timeDifference)
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    console.log("days", daysDifference)
    return `Update ${daysDifference.toFixed()} days ago`
  }

  const repo = () => {
    return !!repoInfo ?
      <>
        <Subtitle font='medium' color='darker'>{repoInfo.name}</Subtitle>
        <Description size='100'>{repoInfo.description}</Description>
        <S.Container>
          <SocialNumbers size="small" color='darker'>{repoInfo.stargazers_count} starts</SocialNumbers>
          <SocialNumbers size="small" color='darker'> {convertUpdate(repoInfo.updated_at)}</SocialNumbers>
        </S.Container>
      </>
      :
      `Error`
  }

  return (
    <S.Wrapper>
      {repo()}
    </S.Wrapper>
  )
}

export default Repository;