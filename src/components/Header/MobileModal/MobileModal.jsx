import { ModalOverlay, ModalContent, CloseBtn, Stripe } from "./MobileModal.styled";
import sprite from "../../../../public/images/sprite.svg";
import { useEffect } from "react";

const MobileModal = ({ children, fn }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
            fn(false)
        }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }

    }, [fn])
    
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) { 
            fn(false)
        }
    }

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseBtn onClick={() => fn(false)} type="button">
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </CloseBtn>
        <Stripe />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default MobileModal;
