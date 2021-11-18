import { H3, Span } from "@fcc/ui";
import styled from "styled-components";
import { RouterLink } from "shared/ui/Link/Link";
import { Savings, Microphone, Entertainment2, WarningTr } from "@fcc/icons";

export function Sidebar() {
  return (
    <SidebarWrapper className="sidebar">
      <H3 margin="s">Каналы</H3>
      <List>
        {links.map((link) => (
          <ListItem key={link.path}>
            {link.icon}
            <RouterLink to={link.path}>
              <Span size="xl">{link.title}</Span>
            </RouterLink>
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  width: 290px;
  position: sticky;
  top: 90px;
  left: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  border-radius: 8px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  :hover {
    background: #e9eaea;
  }
  :active {
    background: #aaabad;
  }
  & a {
    width: 100%;
  }
  & svg {
    margin-right: 16px;
  }
`;

const links = [
  { path: "/topics/tax", title: "Налоги", icon: <Savings /> },
  { path: "/topics/news", title: "Новости", icon: <Microphone /> },
  {
    path: "/topics/congratulations",
    title: "Поздравления",
    icon: <Entertainment2 />,
  },
  { path: "/topics/attention", title: "Внимание", icon: <WarningTr /> },
];
