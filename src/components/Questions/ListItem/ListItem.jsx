import { FAQItem, FAQQuestion, FAQAnswer } from "./ListItem.styled";

const ListItem = ({ question, answer }) => {
  return (
    <FAQItem>
      <FAQQuestion>{question}</FAQQuestion>
      <FAQAnswer>{answer}</FAQAnswer>
    </FAQItem>
  );
};

export default ListItem;
