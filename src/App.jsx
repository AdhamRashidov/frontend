import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Category } from "./pages/categories/category";
import { About } from "./pages/about/about";
import { Help } from "./pages/help/help";
import { MenuLayut } from "./layout/menu-layut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
				  <Route path="menu" element={<MenuLayut />}>
				  	{/* <Route index /> */}
				  </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
