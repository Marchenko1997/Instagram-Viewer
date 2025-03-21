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
import sprite from "../../../../public/images/sprite.svg";
import ModalAvatar from "./ModalAvatar/ModalAvatar";
import { useState } from "react";

const proxyUrl = import.meta.env.VITE_PROXY_URL;


const Profile = ({ profileData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!profileData) {
    return 
  }

  const stats = getStats(profileData);

 const highResAvatarUrl =
    profileData.profile_pic_url_hd || profileData.profile_pic_url;
  
  const avatarUrl = `${proxyUrl}?url=${encodeURIComponent(highResAvatarUrl)}`;
  
  const profileUrl = `https://www.instagram.com/${profileData.username}/`;

  return (
    <>
      {isModalOpen && (
        <ModalAvatar
          avatarUrl={avatarUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <ProfileContainer>
        <AvatarWrapper>
          <Avatar
            src={avatarUrl}
            crossOrigin="anonymous"
            alt={profileData.full_name || "User"}
          />
          <AvatarBtnContainer onClick={() => setIsModalOpen(true)}>
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
        <FullName>{profileData.full_name || " "}</FullName>
        <Biography>
          {profileData.biography ||
            (profileData.is_private ? "Private Account" : "Public Account")}
        </Biography>
      </ProfileContainer>
    </>
  );
};

export default Profile;
