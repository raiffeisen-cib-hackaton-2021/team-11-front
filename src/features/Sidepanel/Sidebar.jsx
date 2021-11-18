import { H3 } from "@fcc/ui";
import styled from "styled-components";

export function Sidebar() {
  return (
    <SidebarWrapper className="sidebar">
      <H3>Каналы</H3>
      <ul>
        <li>1234</li>
        <li>1234</li>
        <li>124</li>
      </ul>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  width: 290px;
  position: sticky;
  top: 100px;
  left: 0;
`;
