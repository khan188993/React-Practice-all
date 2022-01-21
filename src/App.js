import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

const App = () => {
  return (
    <>
      <h1>React Router Dom 6 - By Geeky Show</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Contact/>}></Route>
        <Route path="/contact" element={<About/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/post/:category" element={<Post/>}></Route>
        <Route path="/post/:brand/:id" element={<Post/>}></Route>
        <Route path="*" element={<h1>Error - 404 page</h1>}></Route>
      </Routes>
    </>
  );
};

export default App;
