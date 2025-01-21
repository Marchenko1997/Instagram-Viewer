import { InputWrapper, StyledField } from "./InputHero.styled"

const InputHero = () => {
  return (
    <InputWrapper>
      <StyledField type="text" placeholder="@username or link" />
    </InputWrapper>
  );
}

export default InputHero