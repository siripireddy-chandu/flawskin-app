import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Trailsession from './pages/Trailsession'
import FormPage from './pages/FormPage';
import FullBody from './pages/Fullbody';
import Face from './pages/Face';
import Underarms from './pages/Underarms';
import Hands from './pages/Hands';
import Legs from './pages/Legs';
import Back from './pages/Back';
import Bikini from './pages/Bikini';
import ChestAbdomen from './pages/ChestAbdomin';
import Buttocks from './pages/Buttocks';
import Packages from './pages/Packages';
import Requestcall from './pages/Requestcall';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminPortal from './pages/admin';


function App() {
  return (

    <div className="d-flex flex-column min-vh-100">
     
      <main className="flex-grow-1">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/Trailsession" element={<Trailsession />} />
    <Route path="/Fullbody" element={<FullBody />} />
    <Route path="/Face" element={<Face />} />
    <Route path="/Underarms" element={<Underarms />} />
    <Route path="/Hands" element={<Hands />} />
    <Route path="/Legs" element={<Legs />} />
    <Route path="/Back" element={<Back />} />
    <Route path="/Bikini" element={<Bikini />} />
    <Route path="/ChestAbdomin" element={<ChestAbdomen />} />
    <Route path="/Packages" element={<Packages />} />
    <Route path="/Buttocks" element={<Buttocks />} />
    <Route path="/Requestcall" element={<Requestcall />} />
    <Route path="/admin" element={<AdminPortal />} />
    <Route path="/form" element={<FormPage />} />
 </Routes>
 </main>
      <Footer />
    </div>

  );
}

export default App;
