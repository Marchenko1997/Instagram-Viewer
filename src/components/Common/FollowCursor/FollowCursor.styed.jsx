import styled from "styled-components";
export const StyledFollowCursor = styled.div`
  .follow-cursor {
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid #c541b8;
    border-radius: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    z-index: 999;
    pointer-events: none;
    transition: width 0.64s, height 0.64s, border-radius 0.64s, background 0.64s;
  }

  .follow-cursor_active {
    height: 64px;
    width: 64px;
    border-width: 2px;
    background-color: rgba(239, 172, 89, 0.3);
  }

  @media (max-width: 991.98px) {
    .follow-cursor {
      display: none;
    }
  }
`;
