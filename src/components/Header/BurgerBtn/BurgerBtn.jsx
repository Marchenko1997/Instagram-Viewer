import { Button } from './BurgerBtn.styled'
import sprite from "/public/images/sprite.svg";

const BurgerBtn = ({fn}) => {
  return (
    <Button
      type="button"
      aria-label="Open mobile menu"
      onClick={() => fn(true)}
    >
      <svg width={24} height={24}>
        <use xlinkHref={`${sprite}#icon-menu`} />
      </svg>
    </Button>
  );
}

export default BurgerBtn