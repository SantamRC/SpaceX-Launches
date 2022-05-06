import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../Pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  );
}

export default Router;
