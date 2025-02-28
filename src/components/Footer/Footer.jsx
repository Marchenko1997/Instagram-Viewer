import { FooterContainer, ReservedText, FooterContent } from "./Footer.styled";
import SocialFooter from "./SocialFooter/SocialFooter";
import LogoFooter from "./LogoFooter/LogoFooter";

const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <div className="ellipse11"></div>
      <LogoFooter/>
      <div className="ellipse22"></div>
      <FooterContent>
        <SocialFooter />
        <ReservedText>© 2025 Instagram.com, All rights reserved</ReservedText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
