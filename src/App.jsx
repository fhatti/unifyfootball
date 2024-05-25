import "./App.css";
import { Route, Routes } from "react-router-dom";

// COMPONENTS //
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import FullNewsPage from "./components/FullNews/FullNewsPage";
import TeamDetails from "./components/TeamDetails/TeamDetails";
// PAGES //
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Standings from "./pages/Standings/Standings";
import Contact from "./pages/Contact/Contact";
import FixtureDetails from "./components/FixtureDetailed/FixtureDetailed";
import Page404 from "./pages/404";

function App() {
  return (

    <div className="App">
    <Layout>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<FullNewsPage />} />
        <Route path="/standings/:fixtureKey" element={<FixtureDetails />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
      </Layout>
    </div>
  );
}

export default App;
