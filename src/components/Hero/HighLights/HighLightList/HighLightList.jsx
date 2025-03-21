import { useSelector } from "react-redux";
import { selectHighlights } from "../../../../redux/highlights/selectors";
import HighLightCircle from "../HighLightCircle/HighLightCircle";
import { SliderContainer } from "./HighLightList.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {PrivateProfileMessage} from "../../Hero.styled"

const HighLightList = ({ onHighlightClick }) => {
  const highlights = useSelector(selectHighlights);

  if (!highlights || highlights.length === 0) {
    return <PrivateProfileMessage>No highlights available</PrivateProfileMessage>;
  }

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={4}
        slidesPerView={9}
        breakpoints={{
          1024: { slidesPerView: 9 },
          768: { slidesPerView: 5 },
          480: { slidesPerView: 3 },
        }}
      >
        {highlights.map((highlight) => (
          <SwiperSlide
            key={highlight.id}
            onClick={() => onHighlightClick(highlight)}
          >
            <HighLightCircle
              title={highlight.title}
              imageSrc={highlight.cover_media}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default HighLightList;
