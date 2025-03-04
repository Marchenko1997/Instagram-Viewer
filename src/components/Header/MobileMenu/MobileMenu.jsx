import MobileModal from "../MobileModal/MobileModal";
import Navigation from "../Navigation/Navigation";

const MobileMenu = ({ fn }) => {
  return (
    <MobileModal fn={fn}>
      <Navigation closeMenu={() => fn(false)} className="nav-mobile" />
    </MobileModal>
  );
};

export default MobileMenu;
