import { useSelector } from "react-redux";
import { selectHighlights } from "../../../../redux/highlights/selectors";
import HighLightCircle from "../HighLightCircle/HighLightCircle";
import {  SliderContainer } from "./HighLightList.styled";
import Slider from "react-slick";

const HighLightList = () => {
  const highlights = useSelector(selectHighlights);

  console.log("Highlights from Redux:", highlights);

  if (!highlights || highlights.length === 0) {
    return <p>No highlights available</p>;
  }
  // Настройки для react-slick
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...sliderSettings}>
        {highlights.map((highlight) => (
          <HighLightCircle
            key={highlight.id}
            title={highlight.title}
            imageSrc={highlight.cover_media || ""}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default HighLightList;
