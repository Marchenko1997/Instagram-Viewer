import { TabsContainer, TabLink } from "./Tabs.styled"


const Tabs = () => {
  return (
    <>
      <TabsContainer>
        <TabLink to="posts">Posts</TabLink>
        <TabLink to="stories">Stories</TabLink>
        <TabLink to="highlights">Highlights</TabLink>
        <TabLink to="reels">Reels</TabLink>
          </TabsContainer>
    </>
  );
}

export default Tabs