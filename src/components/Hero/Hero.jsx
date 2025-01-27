import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../redux/profile/operations";
import { loadStories } from "../../redux/stories/operations";
import { fetchPosts } from "../../redux/posts/operations";
import { fetchHighlights } from "../../redux/highlights/operations";
import {
  selectUser,
  selectIsLoading as selectProfileLoading,
} from "../../redux/profile/selectors";
import { useUsername } from "../../context/UsernameContext";
import Profile from "./Profile/Profile";
import InputHero from "./InputHero/InputHero";
import Tabs from "./Tabs/Tabs";
import { Outlet } from "react-router-dom";

const Hero = () => {
  const { username } = useUsername();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const profileLoading = useSelector(selectProfileLoading);
  

  useEffect(() => {
    if (username) {
      dispatch(loadProfile(username));
        dispatch(loadStories(username));
        dispatch(fetchPosts(username));
        dispatch(fetchHighlights(username));
    }
  }, [dispatch, username]);

   if (profileLoading) {
     return <p>Loading...</p>;
   }
  return (
    <div>
      <InputHero />
      <Profile profileData={user} />
      <Tabs />
      <Outlet />
    </div>
  );
};

export default Hero;
