// import logo from './logo.svg';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutFC from "./components/About/AboutFC";
import CategoryFC from "./components/Category/CategoryFC";
import ContactFC from "./components/Contact/ContactFC";
import Detail from "./components/Detail/DetailFC";
import FilmFC from "./components/Film/FilmFC";
import FooterFC from "./components/Footer/FooterFC";
import IntroFC from "./components/Intro/IntroFC";
// import Main from './components/Main';
import NavigationFC from "./components/Navigation/NavigationFC";
import NewsFC from "./components/News/NewsFC";

import { ThemeContext } from "./components/ThemeContext";
// import { Button } from "@material-ui/core";
function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
      <NavigationFC />
      {/* <IntroFC/> */}
      <Routes>
        {/* <Route path="/" element={<IntroFC />}></Route> */}
        <Route path="/" element={<FilmFC />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/category" element={<CategoryFC />}></Route>
        {/* <Route path="/contact" element={<ContactFC/>}></Route> */}
        <Route path="/about" element={<AboutFC/>}></Route>
        <Route path="/news" element={<NewsFC/>}></Route>
        {/* <Main/> */}
      </Routes>
      <FooterFC />
    </div>
  );
}

export default App;
