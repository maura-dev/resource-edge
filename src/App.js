
 import React from "react";
 import { BrowserRouter , Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css"
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
 
 const App = () => {
   return (
       <BrowserRouter>
           <Routes>
                 <Route path="/" element={<LandingPage/>}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/reset-password" element={<ResetPassword/>}/>
                 <Route path="/dashboard" element={<Dashboard/>}/>
           </Routes>
       </BrowserRouter>
   );
 };
 
 export default App;
 
