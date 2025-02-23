import guideFeatures from "../../../data/guideFeatures";
import GuideCard from "../GuideCard/GuideCard";
import { ListWrapper, ListTitle } from "./GuideList.styled";

const GuideList = () => {
  return (
    <ListWrapper>
      <ListTitle>How to use AnonyIG?</ListTitle>
      {guideFeatures.map((feature, index) => (
        <GuideCard key={feature.id} {...feature} reverse={index % 2 !== 0} />
      ))}
    </ListWrapper>
  );
};

export default GuideList;
