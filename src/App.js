import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/footer";
import Home from "./components/home";
import Emotions from "./components/emotions";
import Content from "./components/content";
import Navbottom from "./components/navbottom";
import Flow from "./components/flow";
import Grammar from "./components/grammar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FinalReport from "./components/FinalReport";
import SignUp from "./components/SignUp";

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="Home"
            element={
              <>
                <Home />
                <Navbottom />
              </>
            }
          />
          <Route
            path="Emotions"
            element={
              <>
                <Emotions />
                <Navbottom />
              </>
            }
          />
          <Route
            path="Content"
            element={
              <>
                <Content />
                <Navbottom />
              </>
            }
          />
          <Route
            path="Flow"
            element={
              <>
                <Flow />
                <Navbottom />
              </>
            }
          />
          <Route
            path="Grammar"
            element={
              <>
                <Grammar />
                <Navbottom />
              </>
            }
          />
          <Route
            path="AboutUs"
            element={
              <>
                <AboutUs />
                <Navbottom />
              </>
            }
          />
          <Route
            path="ContactUs"
            element={
              <>
                <ContactUs />
                <Navbottom />
              </>
            }
          />

          <Route
            path="FinalReport"
            element={
              <>
                <FinalReport />
                <Navbottom />
              </>
            }
          />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
