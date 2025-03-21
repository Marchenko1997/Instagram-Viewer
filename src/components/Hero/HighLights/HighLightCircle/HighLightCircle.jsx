import {
  HighlightWrapper,
  HighlightImage,
  HighlightTitle,
} from "./HighLightCircle.styled";

const proxyUrl = import.meta.env.VITE_PROXY_URL;


const HighLightCircle = ({ title, imageSrc }) => {
  if (!imageSrc) {
    console.error("Invalid image URL for highlight:", title);
    return null;
  }

  const proxiedImageSrc = `${proxyUrl}?url=${encodeURIComponent(imageSrc)}`;

  return (
    <HighlightWrapper>
      <HighlightImage src={proxiedImageSrc} alt={title} />
      <HighlightTitle>{title}</HighlightTitle>
    </HighlightWrapper>
  );
};

export default HighLightCircle;
