import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './component/Header';
import Navbar from './component/Navbar';
 import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Awards from './Pages/Awards';
import BloodDonation from './Pages/BloodDonation';
import Contact from './Pages/Contact';
import FoodAid from './Pages/FoodAid';
import HealthCare from './Pages/HealthCare';
import HelpEducation from './Pages/HelpEducation';
import HelpJobBank from './Pages/HelpJobBank';
import LegalAid from './Pages/LegalAid';
import MedicineCharity from './Pages/MedicineCharity';
import NewsAndStories from './Pages/NewsAndStories';
import OldAgeHome from './Pages/OldAgeHome';
import PoorPeopleSupport from './Pages/PoorPeopleSupport';
import OurMembers from './Pages/OurMembers';
import OurPartners from './Pages/OurPartners';
import ShadiMubark from './Pages/ShadiMubark';
import WaterPlant from './Pages/WaterPlant';
import Footer from './component/Footer';
import DonationForm from './component/Donation';
// import ParticlesBackground from './Pages/ParticlesBackground';

const App = () => {

  return (
    <> 

<div className="relative overflow-hidden bg-white">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bubble absolute bg-red-300 rounded-full"
          style={{
            width: `${Math.random() * 50 + 50}px`,
            height: `${Math.random() * 50 + 50}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 2}s`
       
          }}
         ></div>
         ))} 

    {/* <ParticlesBackground /> */}
    <BrowserRouter>
    <Header/>
    <Navbar />
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/AboutUs' Component={AboutUs}/>   
    <Route path="/LegalAid" Component={LegalAid}/>
    <Route path="/HelpJobBank" Component={HelpJobBank}/>
    <Route path="/FoodAid" Component={ FoodAid}/>
    <Route path="/PoorPeopleSupport" Component={PoorPeopleSupport}/>
    <Route path="/HealthCare" Component={HealthCare }/> 
    <Route path="/NewsAndStories" Component={NewsAndStories}/>
    <Route path="/OurPartners" Component={OurPartners}/>
    <Route path="/ShadiMubark" Component={ShadiMubark}/>
    <Route path="/HelpEducation" Component={HelpEducation}/>
    <Route path="/OldAgeHome" Component={OldAgeHome }/>
    <Route path="/BloodDonation" Component={BloodDonation}/>
    <Route path="/MedicineCharity" Component={MedicineCharity}/>
    <Route path="/WaterPlant" Component={WaterPlant}/>
    <Route path="/Awards" Component={Awards}/>
    <Route path="/OurMembers" Component={OurMembers}/>
    <Route path="/Contact" Component={Contact}/>
    <Route path="/DonationForm" Component={DonationForm}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
    
       
      
    </div>
    </>
  )
};

export default App;