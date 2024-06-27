
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
import Values from './Componants/About/Values/Values';
// import Event from './Componants/Services/EventManage/Event';
import Insurance from './Componants/Services/Insurance/Insurance';
import Eventmanage from './Componants/Services/EventManage/Event';

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
            <Route path='/eventmanage' element= {<Eventmanage/>}/>
            <Route path='/insurance' element= {<Insurance/>}/>
            <Route path="*" element={<Nopaage />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/values" element={<Values />} />

            </Routes>
            <Footer/>
            </BrowserRouter>



    </>
  );
}

export default App;
