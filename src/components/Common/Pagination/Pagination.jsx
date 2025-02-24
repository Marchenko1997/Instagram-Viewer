import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "./Pagination.styled";
import sprite from "../../../../public/images/sprite.svg";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    return (
      <PaginationContainer>
        <PageButton
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg width="52" height="52">
            <use xlinkHref={`${sprite}#icon-chevron-left`} />
          </svg>
        </PageButton>
        <PageNumber>
          {currentPage} / {totalPages}
        </PageNumber>
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg width="52" height="52">
            <use xlinkHref={`${sprite}#icon-chevron-right`} />
          </svg>
        </PageButton>
      </PaginationContainer>
    );
};

export default Pagination;
