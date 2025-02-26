import { useEffect, useRef, useState } from "react";
import instaFeatures from "../../../data/instaFeatures";
import CardValue from "../CardValue/CardValue";
import {
  FeaturesWrapper,
  FeaturesTitle,
  FeaturesGrid,
} from "./ListValues.styled";

const ListValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <FeaturesWrapper ref={sectionRef}>
      <FeaturesTitle className={isVisible ? "visible" : ""}>
        Instagram Story Viewer Features
      </FeaturesTitle>
      <FeaturesGrid className={isVisible ? "visible" : ""}>
        {instaFeatures.map((feature) => (
          <CardValue key={feature.id} {...feature} />
        ))}
      </FeaturesGrid>
    </FeaturesWrapper>
  );
};

export default ListValues;
