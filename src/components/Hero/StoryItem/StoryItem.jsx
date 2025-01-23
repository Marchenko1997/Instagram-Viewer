import { StoryCard, StoryImage, StoryTitle } from "./StoryItem.styled"

const StoryItem = ({title, imageUrl}) => {
  return (
      <StoryCard>
          <StoryImage src={imageUrl} alt={title} />
          <StoryTitle title={title}/>
    </StoryCard>
  )
}

export default StoryItem