import * as S from './style'

import Button from '../Button/index'
import SearchInput from '../searchInput/index'

const Form = () => {
  return (
    <S.Form>
      <SearchInput placeholder="Type the username here..."/>
      <Button>Buscar</Button>
    </S.Form>
  )
}

export default Form;