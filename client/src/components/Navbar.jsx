import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled("p")`
  font-size: 20px;
  padding: 4px;
  margin-right: 20px;
`;
const Tabss = styled(NavLink)`
  font-size: 20px;
  padding: 4px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs>SunbaseData</Tabs>
        <Tabss to={"/"}>All Users</Tabss>
        <Tabss to={"/add"}>Add User</Tabss>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
