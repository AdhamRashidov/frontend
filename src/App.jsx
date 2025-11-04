import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { Hero } from "./components/hero/hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="hero" element={<Hero />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
