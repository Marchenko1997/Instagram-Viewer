import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardText,
} from "./GuideCard.styled";

const GuideCard = ({ svg, title, description, reverse }) => {
  return (
    <CardWrapper reverse={reverse}>
      <CardTitle>{title}</CardTitle>
      <CardImage src={svg} alt={title} />
      <CardText>{description}</CardText>
    </CardWrapper>
  );
};

export default GuideCard;
