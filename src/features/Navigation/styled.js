import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 10px 10px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.teal};
`;

export const Item = styled.li`
  padding: 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    
    color: ${({ theme }) => theme.color.silver};
    
    &.active {
      color: ${({ theme }) => theme.color.white};
    }
`;