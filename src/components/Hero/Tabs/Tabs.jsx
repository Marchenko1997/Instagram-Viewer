import { TabsContainer, TabLink } from "./Tabs.styled"
import { useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation(); 
  const currentPath = location.pathname.split("/").pop(); 

  return (
    <>
      <TabsContainer>
        <TabLink
          to="posts"
          className={
            currentPath === "" || currentPath === "posts" ? "active" : ""
          }
        >
          Posts
        </TabLink>
        <TabLink to="stories">Stories</TabLink>
        <TabLink to="highlights">Highlights</TabLink>
        <TabLink to="reels">Reels</TabLink>
      </TabsContainer>
    </>
  );
}

export default Tabs