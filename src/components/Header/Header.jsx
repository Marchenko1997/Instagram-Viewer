import { HeaderMain } from "./Header.styled"
import Navigation from "./Navigation/Navigation";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

const Header = () => {
  return (
    <HeaderMain>
      <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <Navigation />
          <HeaderTitle />
    </HeaderMain>
  );
}

export default Header