
import styled from "styled-components";

export const Aside = styled.aside`
  width: 270px;
  min-width: 270px;
  height: 100vh;
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  border-right: 1px solid #ece8e4;

  font-family: Verdana, sans-serif;
  overflow: hidden;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 28px 22px 24px;
  border-bottom: 1px solid #f1eeeb;

  img {
    flex-shrink: 0;
  }
`;

export const LogoText = styled.div`
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.4;
`;

export const LogoSubtitle = styled.div`
  color: #9ca3af;
  font-size: 11px;
  font-weight: 400;
  margin-top: 3px;
`;

export const Nav = styled.nav`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  padding: 16px 12px 24px;

  scrollbar-width: thin;
  scrollbar-color: #e5ddd7 transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e5ddd7;
    border-radius: 10px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavGroupTitle = styled.div`
  padding: 0 12px;
  margin-bottom: 9px;

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;

  color: #a1a1aa;
`;

export const NavItem = styled.button<{ $active: boolean }>`
  width: 100%;
  min-height: 43px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 12px;
  border-radius: 9px;
  border: 1px solid transparent;

  background: ${({ $active }) =>
    $active ? "#f7f0eb" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#9c6c4f" : "#62646b"};

  font-family: inherit;
  text-align: left;
  cursor: pointer;
  position: relative;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  ${({ $active }) =>
    $active &&
    `
      font-weight: 700;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 9px;
        bottom: 9px;
        width: 3px;
        border-radius: 4px;
        background: #b48263;
      }
    `}

  &:hover {
    background: ${({ $active }) =>
      $active ? "#f7f0eb" : "#f8f7f6"};

    color: ${({ $active }) =>
      $active ? "#9c6c4f" : "#333333"};
  }

  &:focus-visible {
    outline: 2px solid #b48263;
    outline-offset: 2px;
  }
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
`;

export const NavIcon = styled.div<{ $active: boolean }>`
  width: 22px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ $active }) =>
    $active ? "#b48263" : "#8b8e96"};

  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const NavLabel = styled.span`
  font-size: 12px;
  line-height: 1.5;
  white-space: normal;
`;

export const NavArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b48263;
  flex-shrink: 0;
`;

export const SidebarFooter = styled.div`
  padding: 16px 12px 20px;
  border-top: 1px solid #f1eeeb;
  background: #ffffff;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 12px 14px;

  background: transparent;
  color: #9b5555;

  border: 1px solid transparent;
  border-radius: 9px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #fdf1f1;
    color: #c24141;
  }

  &:focus-visible {
    outline: 2px solid #c24141;
    outline-offset: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`;
