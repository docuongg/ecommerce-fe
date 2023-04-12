import Home from "../pages/Home"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Register from "../pages/Register"
import ProductCategory from "../pages/ProductCategory"
import ProductDetail from "../pages/ProductDetail"

import { ManagerLayout } from "../components/Layout"
import { OrderManager as AnalystOrder } from "~/pages/management/Analyst"
import { Category } from "~/pages/management"
import { ProductManager } from "~/pages/management"


const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cart", component: Cart },
  { path: "/categories/:id", component: ProductCategory },
  { path: "/product", component: ProductDetail },
  { path: "/dashboard/income", component: AnalystOrder, layout: ManagerLayout },
  { path: "/manager/category", component: Category, layout: ManagerLayout },
  { path: "/manager/product", component: ProductManager, layout: ManagerLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 