import HighLightList from "./HighLightList/HighLightList"
import HighLightCardsGallery from "./HighLightCardsGallery/HighLightCardsGallery"
import { useState } from "react";

const HighLights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  
    const handleHighlightClick = (highlight) => {
      setSelectedHighlight(highlight);
  };
  
  return (
    <div>
      <HighLightList onHighlightClick={handleHighlightClick} />
      {selectedHighlight && (
        <HighLightCardsGallery highlight={selectedHighlight} />
      )}
    </div>
  );
}

export default HighLights