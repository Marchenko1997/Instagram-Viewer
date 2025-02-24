import { useEffect, useState, useRef } from "react";
import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardText,
  TextContainer,
} from "./GuideCard.styled";

const GuideCard = ({
  svg,
  title,
  description,
  reverse,
  index,
  isSectionVisible,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150); // ⏳ Задержка появления карточек
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index, isSectionVisible]); // 🔄 Теперь анимация запускается заново при каждом входе

  // 🔥 Если секция невидима, скрываем карточки снова
  useEffect(() => {
    if (!isSectionVisible) {
      setIsVisible(false);
    }
  }, [isSectionVisible]);

  return (
    <CardWrapper
      ref={cardRef}
      reverse={reverse}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: reverse ? 100 : -100 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <CardImage src={svg} alt={title} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </TextContainer>
    </CardWrapper>
  );
};

export default GuideCard;
