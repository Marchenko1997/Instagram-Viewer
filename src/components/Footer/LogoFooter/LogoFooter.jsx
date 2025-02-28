import { LogoContainer } from "./LogoFooter.styled"
import instaLogo from "../../../../public/images/FooterImg/instaLogo.png"

const LogoFooter = () => {
  return (
    <LogoContainer>
      <img src={instaLogo} alt="instaLogo" />
    </LogoContainer>
  );
}

export default LogoFooter