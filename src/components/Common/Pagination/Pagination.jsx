import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "./Pagination.styled";
import sprite from "../../../../public/images/sprite.svg";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../redux/posts/operations";
import { toast } from "react-toastify";

const Pagination = ({
  currentPage,
  totalPages,
  paginationToken,
  setPaginationToken,
  onPageChange,
  username,
}) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else if (paginationToken) {
      console.log("🔄 Запрос следующей страницы с токеном:", paginationToken);

      dispatch(fetchPosts({ username, paginationToken }))
        .unwrap()
        .then(({ paginationToken: newToken }) => {
          console.log("✅ Новый токен получен:", newToken);
          setPaginationToken(newToken);
          onPageChange(currentPage + 1);
        })
        .catch(() => toast.error("Ошибка загрузки постов!"));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    pages.push(1);
    if (totalPages > 1) pages.push(2);
    if (totalPages > 2) pages.push(3);

    if (totalPages > 4 && currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 3) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={handlePrevPage}>
        <svg width="52" height="52">
          <use xlinkHref={`${sprite}#icon-chevron-left`} />
        </svg>
      </PageButton>

      {generatePageNumbers().map((page, index) => (
        <PageNumber
          key={index}
          className={currentPage === page ? "active" : ""}
          onClick={() => typeof page === "number" && onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}

      <PageButton
        disabled={currentPage === totalPages && !paginationToken}
        onClick={handleNextPage}
      >
        <svg width="52" height="52">
          <use xlinkHref={`${sprite}#icon-chevron-right`} />
        </svg>
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
