import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./pages/product-list"
import ProductDetail from "./pages/Product-detail"

function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route path="" index Component={ProductList} />
        <Route path="/Product-List" Component={ProductList} />
        <Route path="/product-detail/slug/:slug" Component={ProductDetail} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
