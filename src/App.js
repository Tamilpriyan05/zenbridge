import "./css/app.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Scrool from "./components/Scrool";
import Profile from "./components/Profile";
import Grid from "./components/Grid";
import Support from "./components/Support";
import Api from "./components/Api";
import Footer from "./components/Footer";
import Insights from "./components/Insights";
import About from "./components/About";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(true);

  const getstaus = (status) => {
    setStatus(status);
  };
  return (
    <div>
      <Header sendstatus={getstaus} />
      <Nav send={status} />
      <Home />
      <Scrool />
      <Profile />
      <Grid />
      <Support />
      <Api />
      <About />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
