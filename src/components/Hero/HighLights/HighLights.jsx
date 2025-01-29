import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HighLightList from "./HighLightList/HighLightList";
import HighLightCardsGallery from "./HighLightCardsGallery/HighLightCardsGallery";
import { fetchHighlightMedia } from "../../../redux/highlightsInfo/operations";
import {
  selectHighlightMedia,
  selectIsLoadingMedia,
} from "../../../redux/highlightsInfo/selectors";

const HighLights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const dispatch = useDispatch();
  const highlightMedia = useSelector(
    selectHighlightMedia(selectedHighlight?.id)
  );
  const isLoading = useSelector(selectIsLoadingMedia);

  const handleHighlightClick = (highlight) => {
    setSelectedHighlight(highlight);
    dispatch(fetchHighlightMedia(highlight.id)); // Загружаем сторисы
  };

  return (
    <div>
      <HighLightList onHighlightClick={handleHighlightClick} />
      {selectedHighlight && (
        <HighLightCardsGallery
          highlight={selectedHighlight}
          media={highlightMedia}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default HighLights;
