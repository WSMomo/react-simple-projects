import Accordion from "./components/accordion/Accordion";
import ImageCarousel from "./components/carousel/ImageCarousel";
import Github from "./components/github-user-search/Github";
import QuoteGenerator from "./components/quote-generator/QuoteGenerator";
import ShoppingList from "./components/shopping-list/ShoppingList";
import Home from "./components/Home";
//router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Videoplayer from "./components/video-player/VideoPlayer";
import Bmi from "./components/bmi/Bmi";
import { useState } from "react";
import Calculator from "./components/calculator/Calculator";
import Weather from "./components/weather/Weather";

function App() {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(() => !show);
  }
  const routes = (
    <Route path="/" element={<Root show={show} onShow={handleShow} />}>
      <Route index element={<Home />} />
      <Route path="/imagecarousel" element={<ImageCarousel />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/quotegenerator" element={<QuoteGenerator />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
      <Route path="/github" element={<Github />} />
      <Route path="/videoplayer" element={<Videoplayer />} />
      <Route path="/bmi" element={<Bmi />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/weather" element={<Weather />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <div>
      <button className="hamburger-menu" onClick={handleShow}>
        {show ? "-" : "+"}
      </button>

      <div className="app">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

function Root({ show, onShow }) {
  return (
    <div>
      {show && (
        <div className="router">
          <div>
            <Link className="router-link" to="/" onClick={onShow}>
              Home
            </Link>
            <Link className="router-link" to="/imagecarousel" onClick={onShow}>
              Images Carousel
            </Link>
            <Link className="router-link" to="/accordion" onClick={onShow}>
              Accordion
            </Link>
            <Link className="router-link" to="/quotegenerator" onClick={onShow}>
              Quote Generator
            </Link>
            <Link className="router-link" to="/shoppinglist" onClick={onShow}>
              Shopping List
            </Link>
            <Link className="router-link" to="/github" onClick={onShow}>
              Github User Search
            </Link>
            <Link className="router-link" to="/videoplayer" onClick={onShow}>
              Video Player
            </Link>
            <Link className="router-link" to="/bmi" onClick={onShow}>
              BMI Calculator
            </Link>
            <Link className="router-link" to="/calculator" onClick={onShow}>
              Calculator
            </Link>
            <Link className="router-link" to="/weather" onClick={onShow}>
              Weather
            </Link>
          </div>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
