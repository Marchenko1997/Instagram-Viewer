import MobileModal from "../MobileModal/MobileModal";
import Navigation from "../Navigation/Navigation";

const MobileMenu = ({ fn }) => {
  return (
    <MobileModal fn={fn}>
      <Navigation closeMenu={() => fn(false)} /> 
    </MobileModal>
  );
};

export default MobileMenu;
