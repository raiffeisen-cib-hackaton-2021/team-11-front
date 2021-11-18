import { Logotype, Flex, Button, Link as LinkDS } from "@fcc/ui";
import { Notification } from "@fcc/icons";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="header">
      <Flex p="s4" justifyContent="space-between">
        <Flex.Item>
          <LinkDS as={Link} to="/">
            <Logotype />
          </LinkDS>
        </Flex.Item>
        <Flex.Item>
          <LinkDS as={Link} to="/notifications">
            <Button design="ghost">
              <Notification />
              Уведомления
            </Button>
          </LinkDS>
        </Flex.Item>
      </Flex>
      <hr />
    </nav>
  );
}
