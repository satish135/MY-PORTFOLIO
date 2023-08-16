import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion, spring} from 'framer-motion';
import ResumePDF from './resume.pdf';

const Services = () => {
  const transition ={duration :1, type: spring}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>

      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white':""}}>My Awesome</span>
        <span>Services</span>
        <spane> Lorem ispum is simply dummy text of priniting of priniting Lorem 
         <br /> ipsum dolor sit amet, consectetur adipisicing. 
         </spane>
         <a href={ResumePDF} download>
         <button className="button s-button">Download CV</button>
         </a>
         <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">

     <motion.div 
     whileInView={{left: '22rem'}}
      initial={{left: '25%'}}
      transition={transition}
     style={{left:"26rem"}}>
      <Card
      emoji ={HeartEmoji}
      heading = {'Design'}
      detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD, Adobe Illustrate"}
      />
     </motion.div>
     
     {/* second card */}
     <motion.div 
     whileInView={{left: '3rem'}}
     initial={{left: '25%'}}
     transition={transition}
     style={{ top: "14rem",left: "1rem"}}>
      <Card
      emoji={Glasses}
      heading={"Developer"}
      detail={"Html, Css, JavaScript, React, Java, Oracle, MongoDB"}
      />
     </motion.div>
     
     {/*third card */}
     <motion.div 
     whileInView={{left: '20rem'}}
     initial={{left: '25%'}}
     transition={transition}

     style={{ top: "22rem",left: "20rem"}}>
      <Card
      emoji={Humble}
      heading={"UI/UX"}
      detail={"Lorem ispum dummy text are usally use in section where"}
      />
     </motion.div>
          <div className="blur s-blur2" style={{background:"var()--purple"}}></div>

      </div>
    </div>
  )
}

export default Services