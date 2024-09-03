import React from "react";
import LeftPro from "./leftPro"
import PassPro from "./PassPro";


const OldAgeHome = () =>{


    return(
   <>
    
    <div>
    <PassPro
      backImgsrc="/Web-Icon.png"
      secImg= "/Old age1.jpg"
      title="Old Age Home"
                   
      p={`Our old age home has become a trusted place for many families seeking the best care for their loved ones. Over the years, we've built strong relationships with the families of our residents, and their heartfelt testimonials speak volumes about the quality of care and attention we provide. Here, families share their experiences, expressing their gratitude for the compassionate and professional care their loved ones receive. These stories highlight the peace of mind that comes from knowing their elders are in good hands, surrounded by a supportive community where they are treated with the respect and love they deserve. Their words reflect our commitment to creating a warm and nurturing environment that truly feels like home.`}
        
        rep={`""We are deeply committed to enhancing the lives of our elderly community. By investing in our old age home, you contribute to a safe, nurturing environment where seniors can thrive. Your support ensures quality care, companionship, and comfort for those who have given so much. Together, let’s build a brighter, more dignified future for our elders. "" `}
      />
    <LeftPro 
        imgsrc="/old_age_home2.jpg"
        
        heading="Comprehensive Care for the Elderly, Tailored to Their Needs"
        pera={`At our old age home, we understand that each resident has unique needs and preferences. That's why we provide comprehensive care that is personalized to ensure the comfort, well-being, and happiness of every individual. Our team of experienced caregivers works closely with residents and their families to develop customized care plans that address specific health requirements, daily living assistance, and emotional support. Whether it's medical care, assistance with daily activities, or simply a compassionate presence, we are committed to delivering the highest quality of care, respecting the dignity and individuality of each resident.`}
      />
    </div>

   </>

    )
}
export default OldAgeHome;