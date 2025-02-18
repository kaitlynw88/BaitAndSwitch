import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ShowPage from "./pages/ShowPage";


function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/on-a-sunday-in-august" element={<ShowPage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
