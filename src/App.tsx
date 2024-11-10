import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Graph8LandingPage21 from "./pages/Graph8LandingPage21";
import Graph8LandingPage2 from "./pages/Graph8LandingPage2";
import Graph8LandingPage11 from "./pages/Graph8LandingPage11";
import Graph8LandingPage3 from "./pages/Graph8LandingPage3";
import Graph8LandingPage4 from "./pages/Graph8LandingPage4";
import Graph8LandingPage from "./pages/Graph8LandingPage";
import Graph8LandingPage1 from "./pages/Graph8LandingPage1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage1":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage2":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage3":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage4":
        title = "";
        metaDescription = "";
        break;
      case "/graph8-landingpage5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Graph8LandingPage21 />} />
      <Route path="/graph8-landingpage" element={<Graph8LandingPage2 />} />
      <Route path="/graph8-landingpage1" element={<Graph8LandingPage11 />} />
      <Route path="/graph8-landingpage2" element={<Graph8LandingPage3 />} />
      <Route path="/graph8-landingpage3" element={<Graph8LandingPage4 />} />
      <Route path="/graph8-landingpage4" element={<Graph8LandingPage />} />
      <Route path="/graph8-landingpage5" element={<Graph8LandingPage1 />} />
    </Routes>
  );
}
export default App;
