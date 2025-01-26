import {
  ProfileContainer,
  Avatar,
  Username,
  FullName,
  Biography,
  Stats,
} from "./Profile.styled";
import { getStats } from "../../../utils/getStats";

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <p>No profile data available</p>; 
    }
    
  const stats = getStats(profileData);

  return (
    <ProfileContainer>
      <Avatar
        src={profileData.profile_pic_url}
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
