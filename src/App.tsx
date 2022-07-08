import { HomePage } from "./pages"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ProductContextProvider } from "./hooks/context/useProductContext"

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </div>
  )
}

export default App
