import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar"

export default function NavBarRoutes() {
  const Layout = NavigationBar;
  const 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}