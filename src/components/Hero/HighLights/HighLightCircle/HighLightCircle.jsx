import { HighlightWrapper, HighlightImage, HighlightTitle } from "./HighLightCircle.styled"

const HighLightCircle = ({ title, imageSrc }) => {
  return (
    <HighlightWrapper>
      <HighlightImage src={imageSrc} alt={title} />
      <HighlightTitle>{title}</HighlightTitle>
    </HighlightWrapper>
  );
};

export default HighLightCircle;