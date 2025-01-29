import {
  ProfileContainer,
  Avatar,
  Username,
  FullName,
  Biography,
  Stats,
} from "./Profile.styled";
import { getStats } from "../../../utils/getStats";

const proxyUrl = "http://localhost:3001/proxy"; 

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <p>No profile data available</p>; 
    }
    
    const stats = getStats(profileData);
     const avatarUrl = `${proxyUrl}?url=${encodeURIComponent(
       profileData.profile_pic_url
     )}`;
    

  return (
    <ProfileContainer>
      <Avatar
        src={avatarUrl}
        crossOrigin="anonymous"
        alt={profileData.full_name || "User"}
      />
      <Username>@{profileData.username || "unknown"}</Username>
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
