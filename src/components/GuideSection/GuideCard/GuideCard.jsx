import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardText,
  TextContainer,
} from "./GuideCard.styled";

const GuideCard = ({ svg, title, description, reverse }) => {
  return (
    <CardWrapper reverse={reverse}>
      <CardImage src={svg} alt={title} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </TextContainer>
    </CardWrapper>
  );
};

export default GuideCard;
