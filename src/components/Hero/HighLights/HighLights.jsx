import { useState } from "react";
import HighLightList from "./HighLightList/HighLightList";
import HighLightCardsGallery from "./HighLightCardsGallery/HighLightCardsGallery";

const HighLights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(null);

  return (
    <div>
      <HighLightList onHighlightClick={setSelectedHighlight} />
      {selectedHighlight && (
        <HighLightCardsGallery highlight={selectedHighlight} />
      )}
    </div>
  );
};

export default HighLights;
