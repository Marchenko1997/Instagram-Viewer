import { useSelector } from "react-redux";
import { selectHighlights } from "../../../../redux/highlights/selectors";
import HighLightCircle from "../HighLightCircle/HighLightCircle";
import { HighlightsContainer } from "./HighLightList.styled";

const HighLightList = () => {
  const highlights = useSelector(selectHighlights);

  console.log("Highlights from Redux:", highlights);

  if (!highlights || highlights.length === 0) {
    return <p>No highlights available</p>;
  }

  return (
    <HighlightsContainer>
      {highlights.map((highlight) => (
        <li key={highlight.id}>
          <HighLightCircle
            title={highlight.title}
            imageSrc={highlight.cover_media || ""}
          />
        </li>
      ))}
    </HighlightsContainer>
  );
};

export default HighLightList;
