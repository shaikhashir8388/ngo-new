
import EducationalPage from './PageOfEdu';
const HelpEducation = () => {
  return (
    
    <>

    <div className="relative h-48 bg-contain bg-no-repeat bg-center"  
    style={{ backgroundImage: "url('/Website-Fave-Icon.png')" }}>
      <div className="absolute inset-0 bg-white opacity-0"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-black text-4xl md:text-6xl font-bold" >Free Education</h1>
      </div>
    </div>    
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center text-justify">
       <div className="w-full md:w-1/2 p-4"
        data-aos="fade-down"
        data-aos-duration="3000">
        <img src="/education.jpg"
           
         alt="Descriptive Alt Text" className="rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" 
        data-aos="fade-up"
        data-aos-duration="3000">
        <span>Help Human Rights Organization: Providing Free Education for All </span></h2>
        <p className="text-lg md:text-xl" data-aos="fade-up"
        data-aos-duration="3000">
         Help Human Rights Organization is dedicated to promoting human rights through the power of education. We believe that education is a fundamental right and a crucial tool for empowering individuals and communities. Our mission is to provide free, high-quality educational resources and opportunities to everyone, regardless of their socio-economic status.
         <br/>
        <span> Free Educational Programs:  </span>
          Offering a wide range of courses and learning materials for various age groups and educational levels.
          Collaborating with volunteer educators and experts to deliver comprehensive and engaging content.
      <br/> 
      <span>Accessible Learning Platforms:</span>
          Utilizing online platforms to make education accessible to people worldwide.
          Ensuring that our resources are available in multiple languages to reach a diverse audience.
      <br/>
      </p>
      </div>
    </div>
    <EducationalPage />
</>
  )
}

export default HelpEducation;