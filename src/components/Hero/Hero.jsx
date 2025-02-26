import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../redux/profile/operations";
import { loadStories } from "../../redux/stories/operations";
import { fetchPosts } from "../../redux/posts/operations";
import { fetchHighlights } from "../../redux/highlights/operations";
import { fetchReels } from "../../redux/reels/operations";
import {
  selectUser,
  selectIsLoading as selectProfileLoading,
} from "../../redux/profile/selectors";
import { useUsername } from "../../context/UsernameContext";
import Profile from "./Profile/Profile";
import InputHero from "./InputHero/InputHero";
import Tabs from "./Tabs/Tabs";
import { Outlet } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { PrivateProfileMessage } from "./Hero.styled";

const Hero = () => {
  const { username } = useUsername();
  console.log("🦸‍♂️ Hero получает username:", username);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const profileLoading = useSelector(selectProfileLoading);

  useEffect(() => {
    if (username) {
      console.log("✅ Загружаем посты для:", username);
      dispatch(loadProfile(username));
      dispatch(loadStories(username));
      dispatch(fetchPosts({ username }));
      dispatch(fetchHighlights(username));
      dispatch(fetchReels(username));
    }
  }, [dispatch, username]);

  const isPrivate = user?.is_private;

  return (
    <div id="search">
      <InputHero />
      {profileLoading && <Loader />}
      <Profile profileData={user} />
      {username && <Tabs />}
      {isPrivate ? (
        <PrivateProfileMessage>
          🚫 You entered a link to a private account. Try using a link to a
          public account.
        </PrivateProfileMessage>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Hero;
