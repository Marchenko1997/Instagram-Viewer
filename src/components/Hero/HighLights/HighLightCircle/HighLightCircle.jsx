import { HighlightWrapper, HighlightImage, HighlightTitle } from "./HighLightCircle.styled"

const proxyUrl = "https://proxy-server-1-6sj7.onrender.com/proxy"; 

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