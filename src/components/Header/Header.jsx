import { useState, useEffect } from "react";
import { HeaderMain, BurgerWrapper } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateView = () => {
      console.log("Width:", window.innerWidth); // Проверяем, что срабатывает
      setIsMobileView(window.innerWidth <= 768);
    };

    updateView(); // Устанавливаем при монтировании
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <HeaderMain>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>

      {/* Проверяем отработку */}
      {console.log("Mobile View:", isMobileView)}

      {/* Бургер кнопка для мобильных */}
      {isMobileView && (
        <BurgerWrapper>
          <BurgerBtn fn={setIsMobileMenuOpen} />
        </BurgerWrapper>
      )}

      {/* Навигация скрывается на мобилке */}
      {!isMobileView && <Navigation />}

      <HeaderTitle />

      {/* Мобильное меню */}
      {isMobileMenuOpen && <MobileMenu fn={setIsMobileMenuOpen} />}
    </HeaderMain>
  );
};

export default Header;
