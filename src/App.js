import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ShowPage from "./pages/ShowPage";
import OnASunday from "./components/shows/OnASunday";
// import HoneyNS from "./components/shows/HoneyNS";


function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-shows" element={<ShowPage />} />
              <Route path="/our-shows">
                  <Route path="on-a-sunday-in-august" element={<OnASunday />} />
                  {/* <Route path="honey-never-spoils" element={<HoneyNS />} /> */}
              </Route>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
