import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import VisitUs from "./pages/VisitUs";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const menuRef = useRef(null);
  const visitUsRef = useRef(null);
  const orderRef = useRef(null);
  return (
    <div>
      <Navbar
        refs={{
          home: homeRef,
          aboutUs: aboutUsRef,
          menu: menuRef,
          visitUs: visitUsRef,
          order: orderRef,
        }}
      />
      <section ref={homeRef}><Home /></section>
      <section ref={aboutUsRef}><AboutUs /></section>
      <section ref={menuRef}><Menu /></section>
      <section ref={visitUsRef}><VisitUs /></section>
      <section ref={orderRef}><Order /></section>
      <Footer
        refs={{
          home: homeRef,
          aboutUs: aboutUsRef,
          menu: menuRef,
          visitUs: visitUsRef,
          order: orderRef,
        }} 
      />
    </div>
  );
}

export default App;
