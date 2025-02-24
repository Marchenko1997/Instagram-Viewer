import { useEffect, useState, useRef } from "react";
import guideFeatures from "../../../data/guideFeatures";
import GuideCard from "../GuideCard/GuideCard";
import { ListWrapper, ListTitle } from "./GuideList.styled";

const GuideList = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Отслеживаем вход и выход из секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting); // 🔄 Меняем состояние при входе/выходе
      },
      { threshold: 0.3 }
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
          isSectionVisible={isSectionVisible} // ✅ Передаем состояние секции
          index={index}
        />
      ))}
    </ListWrapper>
  );
};

export default GuideList;
