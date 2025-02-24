import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardText,
  TextContainer,
} from "./GuideCard.styled";

const GuideCard = ({ svg, title, description, reverse, isVisible }) => {
  return (
    <CardWrapper
      reverse={reverse}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }} // Начальное состояние
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: reverse ? 100 : -100 }
      } // Анимация при входе/выходе
      transition={{ duration: 0.5, ease: "easeOut" }} // Длительность анимации
    >
      <CardImage src={svg} alt={title} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </TextContainer>
    </CardWrapper>
  );
};

export default GuideCard;
