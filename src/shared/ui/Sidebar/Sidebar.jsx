import { H3, Span } from "@fcc/ui";
import styled from "styled-components";
import { RouterLink } from "shared/ui/Link/Link";
import {
  Entertainment1,
  Microphone,
  Entertainment2,
  WarningTr,
} from "@fcc/icons";
import { CATEGORIES, CATEGORIES_CONFIG } from "../../../constants";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  const isSelected = (path) => location.pathname === path;

  return (
    <SidebarWrapper className="sidebar">
      <H3 margin="s">Каналы</H3>
      <List>
        {links.map((link) => (
          <ListItem data-selected={isSelected(link.path)} key={link.path}>
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
  min-width: 340px;
  width: 290px;
  position: sticky;
  top: 90px;
  left: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 80%;
`;

const ListItem = styled.li`
  border-radius: 8px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  &[data-selected="true"] {
    background-color: #d5d5d6;
  }

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
  {
    path: "/topics/all",
    title: CATEGORIES_CONFIG[CATEGORIES.ALL].title,
  },
  {
    path: "/topics/attention",
    title: CATEGORIES_CONFIG[CATEGORIES.ATTENTION].title,
    icon: <WarningTr />,
  },
  {
    path: "/topics/news",
    title: CATEGORIES_CONFIG[CATEGORIES.NEWS].title,
    icon: <Microphone />,
  },
  {
    path: "/topics/events",
    title: CATEGORIES_CONFIG[CATEGORIES.EVENTS].title,
    icon: <Entertainment1 />,
  },
  {
    path: "/topics/offers",
    title: CATEGORIES_CONFIG[CATEGORIES.OFFERS].title,
    icon: <Entertainment2 />,
  },
];
