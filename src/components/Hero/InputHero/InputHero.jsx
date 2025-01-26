import { useState } from "react";
import { InputWrapper, StyledField } from "./InputHero.styled";
import InputButton from "../InputButton/InputButton";
import { useUsername } from "../../../context/UsernameContext";

const InputHero = () => {
  const { setUsername } = useUsername(); 
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a username or link");
      return;
    }

    setUsername(inputValue); 
  };

  return (
    <InputWrapper>
      <StyledField
        type="text"
        placeholder="@username or link"
        value={inputValue}
        onChange={handleInputChange}
      />
      <InputButton onClick={handleSearch} />
    </InputWrapper>
  );
};

export default InputHero;
