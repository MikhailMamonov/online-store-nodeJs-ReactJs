import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/UserAPI";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "./../utils/consts";

const Auth = observer((props) => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);
  const history = useHistory();

  const clickSign = async () => {
    let data;
    try {
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      user.setUser(data);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorize" : "Register"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-4"
            placeholder="input your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                no account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
              </div>
            ) : (
              <div>
                has account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
              </div>
            )}

            <Button
              className="align-self-end"
              variant={"outline-success"}
              onClick={clickSign}
            >
              {isLogin ? " Sign in" : "Sign Up"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
