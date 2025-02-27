import { FooterContainer, ReservedText } from "./Footer.styled";
import SocialFooter from "./SocialFooter/SocialFooter";

const Footer = () => {
  return (
    <FooterContainer id = "contacts">
      <div className="ellipse11"></div>
      <div className="ellipse22"></div>
          <SocialFooter />
          <ReservedText>© 2025 Instagram.com, All rights reserved</ReservedText>
    </FooterContainer>
  );
};

export default Footer;
