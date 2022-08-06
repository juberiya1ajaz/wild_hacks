import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Treatment from '../pages/Treatment';
import Species from '../pages/Species';
import Donate from '../pages/Donate';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treatment" element={<Treatment />} />
                <Route path="/species" element={<Species />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </BrowserRouter>
    )
}
