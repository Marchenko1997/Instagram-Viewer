import TitleFAQ from "./TitleFAQ/TitleFAQ";
import ListQuestions from "./ListQuestions/ListQuestions";
import { FAQSection } from "./Questions.styled";


const FAQ = () => {
  return (
    <FAQSection id="faq">
      <TitleFAQ />
      <ListQuestions />
    </FAQSection>
  );
};

export default FAQ;
