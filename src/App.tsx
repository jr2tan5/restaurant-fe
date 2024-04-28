import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Home from "./pages/index"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"


// Interface for route definition with typed element
interface RouteConfig {
  path: string;
  element: React.ReactElement;
}

// Define routes
const navRoutes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  //return <Button colorScheme="blue">Button</Button>;
  return (
    <>
      <Router>
        <Routes>
          {navRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
