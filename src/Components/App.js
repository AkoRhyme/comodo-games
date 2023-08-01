import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactPG/Contact';
import AboutPG from './Pages/AboutPG/AboutPG';
import PricingPG from './Pages/PagesPG/PricingPG';
import GamesPG from './Pages/PagesPG/GamesPG';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/comodo-games' element={<Home />} />
                    <Route path='/about' element={<AboutPG />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/pricingpg' element={<PricingPG />} />
                    <Route path='/upcomingpg' element={<GamesPG />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;