import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../index";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { ADMIN_ROUTE, BASKET_ROUTE } from "./../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
        BuyDevice
      </NavLink>
      <Container>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button className="ml-4" variant={"outline-light"} onClick={logOut}>
              log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Login
            </Button>
            <Button to={LOGIN_ROUTE} className="ml-4" variant={"outline-light"}>
              Register
            </Button>
          </Nav>
        )}
      </Container>

      {/* <Nav.Link href={SHOP_ROUTE}>Shop</Nav.Link>
        <Nav.Link href={DEVICE_ROUTE}>Device</Nav.Link>
        <Nav.Link href={SHOP_ROUTE}>Info</Nav.Link> */}
    </Navbar>
  );
});

export default NavBar;
