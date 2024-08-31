import HeroSec from '../component/HeroSec';
// import DonationForm from '../component/Donation';
import LayoutScroll from '../component/LayoutScrollImages'
import Sliders from '../component/Sliders';
import Action from '../component/Action';
// import Bubbles from './Bubbles';


// import AOS from 'aos';
// import 'aos/dist/aos.css';



const Home = () => {
  // useEffect(()=>{
  //   AOS.init({
  //     duration:1500,
  //   });
  //   AOS.refresh();
  // },[]);
  return (
    <>
     {/* <Bubbles /> */}
    <HeroSec/> 
    {/* / <DonationForm/> */}
     <LayoutScroll/>
     <Sliders/>
     <Action/> 
    
  
     
    </>
  )
}

export default Home
