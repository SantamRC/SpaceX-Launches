import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Launch from "../Pages/Launch";
import Appbar from "../Components/Appbar";

function Router() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch/:id" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
