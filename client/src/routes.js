import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Device from "./pages/DevicePage";
import Auth from "./pages/Auth";

export const publicRoutes = [
  { path: SHOP_ROUTE, component: Shop },
  { path: LOGIN_ROUTE, component: Auth },
  { path: REGISTRATION_ROUTE, component: Auth },
  { path: DEVICE_ROUTE + "/:id", component: Device },
];

export const privateRoutes = [
  { path: ADMIN_ROUTE, component: Admin },
  { path: BASKET_ROUTE, component: Basket },
];
