import { useState, useLayoutEffect } from "react";
import { HeaderMain, BurgerWrapper } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useLayoutEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false); 
      }
    };

    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <HeaderMain>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
        <BurgerWrapper>
          <BurgerBtn fn={setIsMobileMenuOpen} />
        </BurgerWrapper>
      {!isMobileView && <Navigation />}
      <HeaderTitle />
      {isMobileMenuOpen && <MobileMenu fn={setIsMobileMenuOpen} />}
    </HeaderMain>
  );
};

export default Header;
