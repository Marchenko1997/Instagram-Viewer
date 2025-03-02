import { HeaderMain, BurgerWrapper } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 385);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 385);
      if (window.innerWidth > 385) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderMain>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      {isMobileView && (
        <BurgerWrapper>
          <BurgerBtn fn={setIsMobileMenuOpen} />
        </BurgerWrapper>
      )}
      {/* {!isMobileView && <Navigation/>} */}
      <Navigation />
      <HeaderTitle />
      {isMobileMenuOpen && <MobileMenu fn={setIsMobileMenuOpen} />}
    </HeaderMain>
  );
};

export default Header;
