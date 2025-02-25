import { faqData } from "../../../data/faqData";
import ListItem from "../ListItem/ListItem";
import { FAQContainer } from "./ListQuestions.styled";

const ListQuestions = () => {
  return (
    <FAQContainer>
      {faqData.map((item, index) => (
        <ListItem key={index} question={item.question} answer={item.answer} />
      ))}
    </FAQContainer>
  );
};

export default ListQuestions;
