import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './style'

import Button from '../Button/index'
import SearchInput from '../searchInput/index'

const Form = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  const handleUserChange = (name) => {
    setUserName(name)
  }

  const handleSubmit = (e) => {
    history.push(`/perfil?user=${userName}`)
    e.preventDefault();
  }

  return (
    <S.Form action="/search" role="search" onSubmit={handleSubmit}>
      <SearchInput placeholder="Type the username here..." InChange={handleUserChange} value={userName}/>
      <Button type="submit">Buscar</Button>
    </S.Form>
  )
}

export default Form;