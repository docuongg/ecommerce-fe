import Home from "../pages/Home"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Register from "../pages/Register"
import ProductCategory from "../pages/ProductCategory"
import Product from "../pages/Product"

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cart", component: Cart },
  { path: "/categories/:id", component: ProductCategory },
  { path: "/product", component: Product }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 