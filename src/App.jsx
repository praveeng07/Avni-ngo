import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notfound/NotFound'
import Volunteers from './pages/volunteers/Volunteers'
import Navbar from './components/Navbar'
import Donate from './pages/donate/Donate'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='volunteers' element={<Volunteers/>}/>
        <Route path='Donate' element={<Donate/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App