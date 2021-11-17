import { Logotype, Whitespace } from "@fcc/ui";

export function NavBar() {
  return (
    <nav className="header">
      <Whitespace p="s4">
        <Logotype />
      </Whitespace>
      <hr />
    </nav>
  );
}
