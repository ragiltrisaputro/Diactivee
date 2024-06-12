import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/about/About'
import Login from './pages/Login/Login'
import Registrasi from './pages/Registrasi/Registrasi'
import Html from './pages/Modul/HTML/Html';
import HtmlPart1 from './pages/Modul/HTML/Part1/HtmlPart1';
import AllModul from './pages/Modul/AllModul/AllModul';
import Contact from './pages/Contact/Contact';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import Web from './pages/Bootcamp/Web';
import Css from './pages/Modul/CSS/Css';

//dasboard
import DashboardLayout from './Layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Home/Dashboard';
import Tutorial from './components/Tutorial/Tutorial';
import DashboardModul from './pages/Dashboard/Modul/DashboardModul';

//dashboard Modul Html
import CoverHtml from './pages/Dashboard/Modul/Html/CoverHtml/CoverHtml';
import DashboardHtml from './pages/Dashboard/Modul/Html/DashboardHtml';
import Html2 from './pages/Dashboard/Modul/Html/Html2/Html2';
import Html3 from './pages/Dashboard/Modul/Html/Html3/Html3';
import Html4 from './pages/Dashboard/Modul/Html/Html4/Html4';
import Html5 from './pages/Dashboard/Modul/Html/Html5/Html5';

//dashboard Modul Css
import CoverCss from './pages/Dashboard/Modul/CSS/CoverCSS/CoverCss';

//dashboard Modul Javascript
import CoverJavascript from './pages/Dashboard/Modul/Javascript/CoverJavascript/CoverJavascript';

//dashboard Bootcamp
import CoverBootcamp from './pages/Dashboard/Bootcamp/BootcampCover/Bootcampcover';
import DashboardPhp from './pages/Dashboard/Bootcamp/BootcampPHP/DashboardBotcamp1';

//dashboard Bootcamp Checkout
import CheckoutPage from './pages/Dashboard/Bootcamp/BootcampPHP/Checkout/CheckoutPage';

//dashboard profil
import Profil from './pages/Dashboard/Profil/Profil';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registrasi' element={<Registrasi/>} />
                <Route path='/modul-html' element={<Html/>} />
                <Route path='/modul-css' element={<Css/>}/>
                <Route path='/html-1' element={<HtmlPart1/>} />
                <Route path='/All-Modul' element={<AllModul/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/bootcamp-php' element={<Bootcamp/>} />
                
                <Route path='/bootcamp-web-developer' element={<Web/>} />

                        <Route path="/dashboard" element={<DashboardLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="profil" element={<Profil />} />
                            <Route path="modul" element={<DashboardModul />} />
                            <Route path="modul/html" element={<CoverHtml />} />
                            <Route path="modul/html/1" element={<DashboardHtml />} />
                            <Route path="modul/html/2" element={<Html2 />} />
                            <Route path="modul/html/3" element={<Html3 />} />
                            <Route path="modul/html/4" element={<Html4 />} />
                            <Route path="modul/html/5" element={<Html5 />} />
                            <Route path='modul/css' element={<CoverCss/>} />
                            <Route path='modul/javascript' element={<CoverJavascript/>}/>
                            <Route path="tutorial" element={<Tutorial />} />
                            <Route path="bootcamp" element={<CoverBootcamp />} />
                            <Route path="bootcamp/php" element={<DashboardPhp />} />
                            <Route path="bootcamp/php/checkout" element={<CheckoutPage />} />
                        </Route>
            </Routes>
        </Router>
    );
}

export default App;

