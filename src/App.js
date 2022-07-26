import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import BlogContextProvider from "./Global/blogContext";
import Footer from './components/Footer';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';



function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BlogContextProvider>
    </div>
  );
}

export default App;
