import icons from "../../../../public/images/sprite.svg";
import { socialLinks } from "../../../data/socialLinks";
import {
  SocialWrap,
  SocialLink,
  SvgIcon,
  SvgContainer,
  IconContainer,
  TextContainer,
} from "./SocialFooter.styled";

const SocialFooter = () => {
  return (
    <SocialWrap>
      <TextContainer>
        {socialLinks
          .filter((link) => !link.icon)
          .map(({ href, label }) => (
            <SocialLink key={href} href={href}>
              {label}
            </SocialLink>
          ))}
      </TextContainer>
      <IconContainer>
        {socialLinks
          .filter((link) => link.icon)
          .map(({ href, icon }) => (
            <SocialLink key={href} href={href} target="_blank">
              <SvgContainer>
                <SvgIcon>
                  <use xlinkHref={`${icons}#${icon}`} />
                </SvgIcon>
              </SvgContainer>
            </SocialLink>
          ))}
      </IconContainer>
    </SocialWrap>
  );
};

export default SocialFooter;
