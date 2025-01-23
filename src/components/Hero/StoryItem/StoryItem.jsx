import { StoryCard, StoryImage, StoryTitle } from "./StoryItem.styled"

const StoryItem = ({title, image}) => {
  return (
      <StoryCard>
          <StoryImage src={image} alt={title} />
          <StoryTitle title={title}/>
    </StoryCard>
  )
}

export default StoryItem