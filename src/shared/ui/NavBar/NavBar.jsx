import { Logotype, Flex, Button } from "@fcc/ui";
import { Notification } from "@fcc/icons";
import styled from "styled-components";
import { RouterLink } from "shared/ui/Link/Link";

export function NavBar() {
  return (
    <Nav className="header">
      <Flex py="s4" justifyContent="space-between">
        <Flex.Item>
          <RouterLink to="/">
            <Logotype />
          </RouterLink>
        </Flex.Item>
        <Flex.Item>
          <RouterLink to="/topics/all">
            <Button design="ghost">
              <Notification />
              Уведомления
            </Button>
          </RouterLink>
        </Flex.Item>
      </Flex>
      <hr />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fefefe;
  z-index: 1;
  margin-bottom: 30px;
`;
