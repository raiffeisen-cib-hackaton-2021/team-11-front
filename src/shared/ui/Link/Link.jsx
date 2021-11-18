import { Link as LinkDS } from "@fcc/ui";
import { Link } from "react-router-dom";

export function RouterLink({ children, ...rest }) {
  return (
    <LinkDS {...rest} as={Link}>
      {children}
    </LinkDS>
  );
}
