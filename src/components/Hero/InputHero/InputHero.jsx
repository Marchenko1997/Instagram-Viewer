import { InputWrapper, StyledField } from "./InputHero.styled"
import InputButton from "../InputButton/InputButton";

const InputHero = () => {
  return (
    <InputWrapper>
          <StyledField type="text" placeholder="@username or link" />
          <InputButton />
    </InputWrapper>
  );
}

export default InputHero