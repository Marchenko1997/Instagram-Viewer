import { SearchButton } from "./InputButton.styled"

const InputButton = ({onClick}) => {
  return (
    <SearchButton onClick={onClick}>Search</SearchButton>
  )
}

export default InputButton