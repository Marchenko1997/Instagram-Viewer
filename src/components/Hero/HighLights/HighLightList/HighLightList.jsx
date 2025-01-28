import { useSelector } from "react-redux";
import { selectHighlights } from "../../../../redux/highlights/selectors";
import HighLightCircle from "../HighLightCircle/HighLightCircle";
import {  SliderContainer } from "./HighLightList.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const HighLightList = () => {
  const highlights = useSelector(selectHighlights);

  console.log("Highlights from Redux:", highlights);

  if (!highlights || highlights.length === 0) {
    return <p>No highlights available</p>;
  }

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={4}
        slidesPerView={9}
        breakpoints={{
          1024: {
            slidesPerView: 9,
          },
          768: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 3,
          },
        }}
      >
        {highlights.map((highlight) => (
          <SwiperSlide key={highlight.id}>
            <HighLightCircle
              title={highlight.title}
              imageSrc={highlight.cover_media?.cropped_image_version?.url || ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default HighLightList;