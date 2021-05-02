import * as S from './style'

import Repository from '../Repositorys/index'

const RepositorysMap = ({ repoInfo }) => {

  return (
    <S.Wrapper>
      {
        !!repoInfo && repoInfo.map((repository, key) => {
          return <Repository repoInfo={repository} key={key}/>
        })
      }
    </S.Wrapper>
  )
}

export default RepositorysMap;