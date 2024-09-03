import React from "react";
import PassPro from "./PassPro";
import LeftPro from "./leftPro";


const BloodDonation = () =>{


    return(
   <>
    <div>
    <PassPro
      backImgsrc="public/Web-Icon.png"
      secImg="public/Blood.png"
      title="Blood Donation"
                   
      p={`Our blood donation initiative is dedicated to saving lives by ensuring a steady supply of blood for those in need. We organize regular blood donation drives, encouraging volunteers to donate blood and contribute to the well-being of patients in hospitals and emergency situations. Our team collaborates with local healthcare providers to ensure that donated blood is safely collected, tested, and distributed to those in critical need. Through education and awareness campaigns, we aim to highlight the importance of blood donation and build a community of regular donors committed to making a life-saving difference.`}
        
        rep={`"Your donation can provide a lifeline during emergencies, surgeries, and treatments. Every drop counts and makes a difference, offering hope and healing to patients and their families. Join us in this vital mission to give the gift of life."`}
      />

      <LeftPro
        imgsrc="public/Blood2.webp"
        
        heading="Comprehensive Care for the Elderly, Tailored to Their Needs"
        pera={`Donating blood is a vital act that can save lives, but it's important to know if you're eligible. Donors must meet certain criteria, including age, weight, and overall health, to ensure safety for both the donor and recipient. The donation process itself is straightforward, beginning with registration and a quick health screening. Once cleared, the donation usually takes just 10-15 minutes, followed by a short rest period. Many find satisfaction in knowing their donation can be used in emergencies, surgeries, or treatments, providing a critical lifeline. Stories from recipients highlight the profound impact that even a single donation can have, turning a simple act into a life-saving gesture. For those interested, there are opportunities not only to donate but also to volunteer and support blood drives in other meaningful ways. If you’re ready to make a difference, it’s easy to get involved by finding a local drive or contacting us for more information`}
      />
            <LeftPro 
        imgsrc="public/Blood3.jpg"
        
        heading="The Donation Of Your Singal Drops Can Save The Whole Nation Life"
        pera={`Blood donation is a crucial way to support those in need. By meeting eligibility requirements, such as age, weight, and health standards, you can help ensure that the donation process is safe and effective. The procedure is simple: after a brief registration and health check, the actual donation takes just a few minutes, followed by a short recovery period. Your donation can be used in a variety of situations, from emergencies to routine medical treatments, making a significant difference in patients' lives. Stories from those who have received blood transfusions underscore the impact of your contribution. Additionally, there are many ways to get involved beyond donating, such as volunteering at drives or spreading awareness. To participate, check local donation events or contact us for more details.`}
      />
    </div>
   </>

    )
}
export default BloodDonation;