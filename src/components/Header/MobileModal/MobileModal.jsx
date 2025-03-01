import { ModalOverlay, ModalContent, CloseBtn } from "./MobileModal.styled";
import sprite from "../../../../public/images/sprite.svg";

const MobileModal = ({ children, fn }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={() => fn(false)} type="button">
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </CloseBtn>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default MobileModal;
