import {
  ProfileContainer,
  AvatarWrapper,
  Avatar,
  AvatarBtnContainer,
  Username,
  UsernameContainer,
  ProfileLink,
  FullName,
  Biography,
  Stats,
} from "./Profile.styled";
import { getStats } from "../../../utils/getStats";
import sprite from "../../../images/sprite.svg"

const proxyUrl = "http://localhost:3001/proxy"; 

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <p>No profile data available</p>; 
    }
    
    const stats = getStats(profileData);
     const avatarUrl = `${proxyUrl}?url=${encodeURIComponent(
       profileData.profile_pic_url
  )}`;
  const profileUrl = `https://www.instagram.com/${profileData.username}/`;
    

  return (
    <ProfileContainer>
      <AvatarWrapper>
        <Avatar
          src={avatarUrl}
          crossOrigin="anonymous"
          alt={profileData.full_name || "User"}
        />
        <AvatarBtnContainer>
          <svg width={22} height={22}>
            <use xlinkHref={`${sprite}#icon-maximize`}></use>
          </svg>
        </AvatarBtnContainer>
      </AvatarWrapper>
      <UsernameContainer>
        <Username>@{profileData.username || "unknown"}</Username>
        <ProfileLink
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={22} height={22}>
            <use xlinkHref={`${sprite}#icon-external-link`}></use>
          </svg>
        </ProfileLink>
      </UsernameContainer>

      <Stats>
        {stats.map(({ name, value }) => (
          <li key={name}>
            <span className="stats_value">{value}</span>
            <span className="stats_name">{name}</span>
          </li>
        ))}
      </Stats>
      <FullName>{profileData.full_name || "No Name"}</FullName>
      <Biography>
        {profileData.biography ||
          (profileData.is_private ? "Private Account" : "Public Account")}
      </Biography>
    </ProfileContainer>
  );
};

export default Profile;
