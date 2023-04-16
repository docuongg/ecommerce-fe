import Home from "../pages/Home"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Register from "../pages/Register"
import ProductCategory from "../pages/ProductCategory"
import ProductDetail from "../pages/ProductDetail"
import Profile from "../pages/default/Profile"

import { ManagerLayout } from "../components/Layout"
import { OrderManager as AnalystOrder, ProductManager as AnalystProduct } from "~/pages/management/Analyst"
import { CategoryManager, ProductManager, OrderManager, UserManager } from "~/pages/management"

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cart", component: Cart },
  { path: "/categories/:id", component: ProductCategory },
  { path: "/product", component: ProductDetail },
  { path: "/profile", component: Profile },
  { path: "/dashboard/income", component: AnalystOrder, layout: ManagerLayout },
  { path: "/dashboard/products", component: AnalystProduct, layout: ManagerLayout },
  { path: "/manager/category", component: CategoryManager, layout: ManagerLayout },
  { path: "/manager/product", component: ProductManager, layout: ManagerLayout },
  { path: "/manager/order", component: OrderManager, layout: ManagerLayout },
  { path: "/manager/user", component: UserManager, layout: ManagerLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 