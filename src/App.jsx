import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Hero from "./Hero";
import Heroine from "./Heroine";
import LuxurySection from "./Luxury";
import Navbar from "./Navbar";
import Account from "./Account";
import Footer from "./Footer";
import Envelope from "./Envelope";
import About from "./About";
import Contact from "./Contact";
import Cookie from "./Cookie";
import Privacy from "./Privacy";
import Careers from "./Career";
import Terms from "./Terms";
import Help from "./Help";
import FAQ from "./FAQ";
import HeighthamChatbot from "./Chatbot";
import Analytics from "./Analytics";
import Sitemap from "./Sitemap";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Heroine />
              <Cookie/>
              <LuxurySection />
              <Hero />
              <Contact/>
              <FAQ/>
              <Footer/>
              <HeighthamChatbot/>
              
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/envelope" element={<Envelope/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/careers" element={<Careers/>} />
         <Route path="/terms-of-use" element={<Terms/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/analytics" element={<Analytics/>} />
           <Route path="/sitemap" element={<Sitemap/>} />

      </Routes>
    </Router>
  );
}

export default App;
