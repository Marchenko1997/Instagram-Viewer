import icons from "../../../../public/images/sprite.svg";
import { socialLinks } from "../../../data/socialLinks";
import {
  SocialLink,
  SocialWrap,
  SvgIcon,
  SvgContainer,
} from "./SocialFooter.styled";

const SocialFooter = () => {
  return (
    <SocialWrap>
      {socialLinks.map(({ href, label, icon }) => (
        <SocialLink key={href} href={href} target={icon ? "_blank" : undefined}>
          {icon ? (
            <SvgContainer>
              <SvgIcon>
                <use xlinkHref={`${icons}#${icon}`} />
              </SvgIcon>
            </SvgContainer>
          ) : (
            label
          )}
        </SocialLink>
      ))}
    </SocialWrap>
  );
};

export default SocialFooter;
