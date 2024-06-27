
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Footer from './Componants/Footer/Footer';
import Career from './Componants/Career/Career';
import Contact from './Componants/Contact/Contact';
import Header from './Componants/Navbar/Header';
// import Slider from './Componants/Home/Slider/Slider';
import SliderComponant from './Componants/Home/Slider/Slider';
import Hrconsultancy from './Componants/Services/HR Consultancy/Hrconsultancy';
import Gototop from './Componants/Gototop/Gototop';
import Nopaage from './Componants/NoPage/Nopage';
import Applications from './Componants/NoPage/Applications';

function App() {
  return (
    <>
            <BrowserRouter>
            <Gototop/>
            <Header/>
            <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/career' element= {<Career/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/slider' element= {<SliderComponant/>}/>
            <Route path='/hrconsultancy' element= {<Hrconsultancy/>}/>
            <Route path="*" element={<Nopaage />} />
            <Route path="/applications" element={<Applications />} />

            </Routes>
            <Footer/>
            </BrowserRouter>



    </>
  );
}

export default App;
