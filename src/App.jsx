import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import PhotoGallery from './pages/PhotoGallery'
import Payments from './pages/Payments'
import ChitSchemes from './pages/ChitSchemes'
import OurTeam from './pages/OurTeam'
import Testimonials from './pages/Testimonials'
import RecentPosts from './pages/RecentPosts'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/schemes" element={<ChitSchemes />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/posts" element={<RecentPosts />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
