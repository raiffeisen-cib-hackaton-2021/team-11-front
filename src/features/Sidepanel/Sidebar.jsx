import { H3 } from "@fcc/ui";
import styled from "styled-components";
import { RouterLink } from "shared/ui/Link/Link";

export function Sidebar() {
  return (
    <SidebarWrapper className="sidebar">
      <H3>Каналы</H3>
      <ul>
        <li>
          <RouterLink to="/topics/tax">Налоги</RouterLink>
        </li>
        <li>
          <RouterLink to="/topics/news">Новости</RouterLink>
        </li>
        <li>
          <RouterLink to="/topics/congratulations">Поздравления</RouterLink>
        </li>
        <li>
          <RouterLink to="/topics/attention">Внимание</RouterLink>
        </li>
      </ul>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  width: 290px;
  position: sticky;
  top: 90px;
  left: 0;
`;
