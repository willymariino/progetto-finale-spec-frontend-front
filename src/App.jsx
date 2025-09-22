import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./pages/product-list"
import ProductDetail from "./pages/Product-detail"
import DefaultLayout from "./Layouts/DefaultLayout"

function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route Component={DefaultLayout}>

          <Route path="" index Component={ProductList} />
          <Route path="/Product-List" Component={ProductList} />
          <Route path="/product-detail/slug/:slug" Component={ProductDetail} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
