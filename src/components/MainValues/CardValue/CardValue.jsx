import { CardWrapper, CardImage, CardTitle, CardDescription } from "./CardValue.styled.jsx"

const CardValue = ({ svg, title, description}) => {
  return (
    <CardWrapper>
      <CardImage src={svg} alt={title} width={312} height={160} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
}

export default CardValue
