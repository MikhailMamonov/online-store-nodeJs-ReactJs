import { Switch, Route, Redirect } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { publicRoutes, privateRoutes } from "./../routes";
import { Context } from "./../index";
import { useContext } from "react";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {user.isAuth &&
        privateRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}

      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} />
      ))}

      <Redirect to={SHOP_ROUTE}></Redirect>
    </Switch>
  );
};

export default AppRouter;
