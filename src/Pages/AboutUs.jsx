import React from 'react';
import ImageSlider from './ImageSlider';
import TwoPartitionContainer from './TwoPartitionContainer';
import PassPro from './PassPro';

const About = () => {
  return (
    <> 
      <PassPro 
        backImgsrc="../src/images/Web-Icon.png"
        secImg="../src/images/aboutBanner.jpg"
        title="About Us"
        p={`A five years ago help human right organization of Pakistan, a charitable and nonprofit organization
           embarked its journey starting from a small camp established at a densely populated area of Jamsheed
           road, Karachi. Initially, it catered to the disaster Covid-19 victims and places, but 4 years ago it worked hard to spread its branches and reach out to an effective infrastructure that deals with liberation and rescue managements all across Pakistan. HELP's diligent effort resulted in setting up camps that provide immediate aid to urgent calls and matters. Also, it has been successful in establishing free medical camps which rescue and cater to the abrupt needs to be a source of prevailing equality among mankind irrespective of the specified modern traits of age, class, religion, or ethnicities. HELP is a registered organization with a charity commission, Government of Pakistan.`}
        rep={`It is wholly operating as an independent charity welfare through the donations of both the members and the non-members. 
              It is free from any organization funding program and agencies. The accounts are always exposed for its donors for self-satisfactory audit inspection.
              We put our utmost efforts into restoring a self-supporting livelihood both economically and mentally to those people who have been stricken with hardship due to conflicts and disasters. We do so promptly, precisely, and flexibly by fully utilizing local human and material resources.`}
      />
      <ImageSlider />
      <TwoPartitionContainer />
    </>
  );
};

export default About;
