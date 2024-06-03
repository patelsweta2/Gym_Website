import React from "react";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
// import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      {/* <AuthContextProvider> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="classes" element={<Classes />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </>
  );
};

export default App;
