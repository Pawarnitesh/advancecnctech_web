import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home";
import About from "./component/About/About";
import Product from "./component/Products/Product";
import Facility from "./component/Facilities/Facility";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Scroll from "./component/Header/Scroll";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="facility" element={<Facility />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Scroll />
    </>
  );
};

export default App;
