import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../redux/profile/operations";
import { loadStories } from "../../redux/stories/operations";
import {
  selectUser,
  selectIsLoading as selectProfileLoading,
} from "../../redux/profile/selectors";
import {
  selectStories,
  selectIsLoading as selectStoriesLoading,
} from "../../redux/stories/selectors";
import { useUsername } from "../../context/UsernameContext"; 
import Profile from "./Profile/Profile";
import ListOfStories from "./ListOfStories/ListOfStories";
import InputHero from "./InputHero/InputHero";

const Hero = () => {
  const { username } = useUsername(); 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const stories = useSelector(selectStories);
  const profileLoading = useSelector(selectProfileLoading);
  const storiesLoading = useSelector(selectStoriesLoading);

  useEffect(() => {
    if (username) {
      dispatch(loadProfile(username)); 
      dispatch(loadStories(username)); 
    }
  }, [dispatch, username]);


  if (profileLoading || storiesLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <InputHero />
      <Profile profileData={user} />
      <ListOfStories stories={stories} />
    </div>
  );
};

export default Hero;
