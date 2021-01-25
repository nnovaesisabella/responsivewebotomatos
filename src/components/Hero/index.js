import React, {useState}from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1,HeroP, HeroBtn} from './HeroElements';


function Hero() {

    //menu open 
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
       <HeroContainer> 
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems> 
                   <HeroH1> A melhor pizza de BH!</HeroH1>
                   <HeroP>Entrega rápida e frete grátis.</HeroP>
                   <HeroBtn> Encomendar</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    )
}

export default Hero
