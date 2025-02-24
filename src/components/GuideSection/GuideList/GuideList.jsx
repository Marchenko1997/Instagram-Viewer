import { useEffect, useState, useRef } from "react";
import guideFeatures from "../../../data/guideFeatures";
import GuideCard from "../GuideCard/GuideCard";
import { ListWrapper, ListTitle } from "./GuideList.styled";

const GuideList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Обсервер видимости секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 🔄 Включаем анимацию при входе
        } else {
          setIsVisible(false); // ❌ Отключаем при выходе
        }
      },
      { threshold: 0.3 } // 30% секции должно быть видно для триггера
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ListWrapper ref={sectionRef}>
      <ListTitle>How to use AnonyIG?</ListTitle>
      {guideFeatures.map((feature, index) => (
        <GuideCard
          key={feature.id}
          {...feature}
          reverse={index % 2 !== 0}
          isVisible={isVisible} // ✅ Передаем видимость в `GuideCard`
        />
      ))}
    </ListWrapper>
  );
};

export default GuideList;
