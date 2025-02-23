import instaFeatures from "../../../data/instaFeatures"
import CardValue from "../CardValue/CardValue"
import { FeaturesWrapper, FeaturesTitle, FeaturesGrid } from "./ListValues.styled"

const ListValues = () => {
    return (
      <FeaturesWrapper >
        <FeaturesTitle>Instagram Story Viewer Features</FeaturesTitle>
        <FeaturesGrid>
          {instaFeatures.map((feature) => (
            <CardValue key={feature.id} {...feature} />
          ))}
        </FeaturesGrid>
      </FeaturesWrapper>
    );
}

export default ListValues