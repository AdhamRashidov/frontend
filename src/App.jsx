import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { ProductDetails } from "./pages/product-details/product-details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
