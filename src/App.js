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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/imagecarousel" element={<ImageCarousel />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/quotegenerator" element={<QuoteGenerator />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="github" element={<Github />} />
        <Route path="videoplayer" element={<Videoplayer />} />
      </Route>
    )
  );

  return (
    <div className="app">
      {/* <ImageCarousel /> */}
      {/* <Accordion /> */}
      {/* <QuoteGenerator /> */}
      {/* <ShoppingList /> */}
      {/* <Github /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function Root() {
  return (
    <div>
      <div className="router">
        <div>
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/imagecarousel">
            Images Carousel
          </Link>
          <Link className="router-link" to="/accordion">
            Accordion
          </Link>
          <Link className="router-link" to="/quotegenerator">
            Quote Generator
          </Link>
          <Link className="router-link" to="/shoppinglist">
            Shopping List
          </Link>
          <Link className="router-link" to="/github">
            Github User Search
          </Link>
          <Link className="router-link" to="/videoplayer">
            Video Player
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
