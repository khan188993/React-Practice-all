import { Route, Routes,Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Post from "./components/pages/Post";


const App = () => {
  let isLogged = false;
  return (
    <>
      <h1>React Router Dom 6 - By Geeky Show</h1>
      <Navigation />d
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/dashboard" element={isLogged? <Dashboard/>:<Navigate to='/login' replace state={{st:'User is not Login'}}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/post/:category" element={<Post/>}></Route>
        <Route path="/post/:brand/:id" element={<Post/>}></Route>
        <Route path="*" element={<h1>Error - 404 page</h1>}></Route>
      </Routes>
    </>
  );
};

export default App;
