import { InputWrapper, StyledField } from "./InputHero.styled";
import InputButton from "../InputButton/InputButton";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../redux/slice";
import { loadStories } from "../../../redux/operations";

const InputHero = () => {
  const dispatch = useDispatch();
  let inputValue = "";

  const handleInputChange = (e) => {
    inputValue = e.target.value;
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a username or link");
      return;
    }

      dispatch(setProfile(inputValue));
      dispatch(loadStories(inputValue));
  };

  return (
    <InputWrapper>
      <StyledField
        type="text"
        placeholder="@username or link"
        onChange={handleInputChange}
      />
      <InputButton onClick={handleSearch} />
    </InputWrapper>
  );
};

export default InputHero;
