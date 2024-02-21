import React from 'react';
import Landing from '../Layout/Landing'
import AboutMe from '../Layout/AboutMe'
import Testimonial from '../Layout/Testimonial'
import Work from '../Layout/Work'
import PersonalProjects from '../Layout/PersonalProjects'
import ContactMe from '../Layout/ContactMe'
import MobileMenu from '../components/MobileMenu'

function App() {
  return (
    <div>
      <MobileMenu/>
      <Landing/>
      <AboutMe/>
      <Testimonial/>
      <Work/>
      <PersonalProjects/>
      <ContactMe/>
    </div>
  )

}

export default App;


