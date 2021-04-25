import * as S from './style'


const SearchInput = ({placeholder, InChange, value}) => {

  const handleOnChange = (e) => {
    InChange(e.target.value)
  }

  return (
    <>
      <S.Input placeholder={placeholder} onChange={handleOnChange} value={value}/>
    </>
  )
}

export default SearchInput;