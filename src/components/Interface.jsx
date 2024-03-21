import React from 'react'
import './interface.css' 
import {motion} from 'framer-motion';

const Section = (props) =>{
  const {children} = props;

  return(
    <motion.section initial={{opacity:0, y:100,}} whileInView={{opacity:1, y:0, transition:{duration:1,delay:0.6}}}>
        {children}
    </motion.section>
  )
}


function Interface() {
  return (
   <>
    <Homesection/>
    <Aboutsection/>
    <Contactsection/>
   </>
  )
}

const Aboutsection = () => {
    return (
        <Section>
              <h1 style={{fontWeight:'bolder', color:'white', fontSize:'32px',padding:'10px'}}>about</h1>
        </Section>
    )
}

const Homesection = () => {
    return (
        <Section>
              <h1 style={{fontWeight:'bolder', color:'skyBlue', fontSize:'32px',padding:'10px'}}>Hello, Welcome here..</h1>
        </Section>
    )
}

const Contactsection = () => {
    return (
        <Section>
              <h1>Contact</h1>
        </Section>
    )
}

export default Interface