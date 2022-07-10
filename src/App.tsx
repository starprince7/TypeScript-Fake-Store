import { HomePage } from "./pages"
import { Cart } from "./pages/cart"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ProductContextProvider } from "./hooks/context/useProductContext"
import { CartContextProvider } from "./hooks/context/useCartContext"

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  )
}

export default App
