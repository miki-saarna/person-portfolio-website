import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
// unsure why but somehow "satelliteOrbit" is called without explicitly being called ore returned anywhere
// import satelliteOrbit from "../utils/AnimatedEllipse";
import ParallaxImg from "../utils/ParallaxImg";

import portrait from "../images/portfolio-portrait.jpg";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import saturn from "../images/saturn.png";
import rocket from "../images/rocket.png";
import satellite from "../images/satellite.png";

// import AnimatedEllipse from "../utils/AnimatedEllipse";

const HomePage = () => {
    
    
    const [offset, setOffset] = useState(0);

    
    const handleScroll = () => setOffset(window.pageYOffset);
    
    

    // AnimatedEllipse();
    // let satelliteMovement = 0;
    
    // function satelliteOrbit() {
    //     const radiusX = 95;
    //     const radiusY = 50;
    //     const velocity = 0.02;
        
    //     satelliteMovement += velocity

    //     const satellite = document.querySelector('.scale-satellite')
    //     // setRadians(offset * velocity);
    //     satellite.style.transform = `translate(${Math.cos(satelliteMovement) * radiusX}px, ${Math.sin(satelliteMovement) * radiusY + Math.cos(satelliteMovement) * radiusX}px) scale(${Math.sin(satelliteMovement) + 1.3}) rotate(0deg) `
            
    //     // adjust z-index based on if element is 'in-front' or 'behind' the earth
    //     Math.sin(satelliteMovement) < 0 
    //         ? satellite.style.zIndex = 2
    //         : satellite.style.zIndex = 4

    //     requestAnimationFrame(satelliteOrbit);
    // }
    // window.requestAnimationFrame(satelliteOrbit);
    



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const parallax = document.querySelectorAll(".parallax");

        parallax.forEach((element) => {
            const speedX = element.dataset.speedX;
            const speedY = element.dataset.speedY;
            const scale = element.dataset.scale;

            if(element.className.includes('scale-rocket')) {
                element.style.transform = `matrix(${1 + (offset * scale)}, 0, 0, ${1 + (offset * scale)}, ${offset * speedX}, -${offset * speedY})`
            }
            if(element.className.includes('scale-moon')) {
                element.style.transform = `matrix(${1 - (offset * scale)}, 0, 0, ${1 - (offset * scale)}, -${offset * speedX}, -${offset * speedY}) rotate(215deg)`
            }
            if(element.className.includes('scale-saturn')) {
                element.style.transform = `matrix(${1 - (offset * scale)}, 0, 0, ${1 - (offset * scale)}, -${offset * speedX}, ${offset * speedY})`
            }
            if(element.className.includes('scale-satellite')) {

                // formula for a parabola
                // element.style.transform = `translate(${offset * speed * 17}px, -${((offset - 100) * speed) ** 2}px)`;
                
                // adjust radius x-value
                const radiusX = 95;
                // adjust radius y-value
                const radiusY = 50;
                // adjust speed of motion
                const velocity = 0.02;
                // calculates position relative to offset as well as velocity
                const movement = offset * velocity;
                
                // creates a circular motion
                // element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusX}px) scale(${Math.sin(movement) + 1.3}) rotate(0deg) `

                // creates an ellipse motion
                element.style.transform = `translate(${Math.cos(movement) * radiusX}px, ${Math.sin(movement) * radiusY + Math.cos(movement) * radiusX}px) scale(${Math.sin(movement) + (scale * 1000)}) rotate(0deg) `
                    
                // adjust z-index based on if element is 'in-front' or 'behind' the earth
                Math.sin(movement) < 0 
                    ? element.style.zIndex = 2
                    : element.style.zIndex = 4
                    
            }
        })
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);


    // section fade in
useEffect(() => {
    const reveal = document.querySelector(".reveal");

    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        let revealPoint = 10;
        if(window.innerWidth < 768) {
          revealPoint = 400
        } else if(window.innerWidth < 1024) {
          revealPoint = 150
        } else if(window.innerWidth < 1200) {
          revealPoint = 150
        } else {
          revealPoint = 150
        }
        if(revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
},[]);

    return (
        <>
            <h3 className='homepage-title reveal'>Discover the Possibilities</h3>
            {/* earth is not centering on page reload */}
            <img className='earth' data-speed="0.7" src={earth} alt="" />
            <img className='moon parallax scale-moon' data-speed-x="0.3" data-speed-y="0.4" data-scale=".0007" src={moon} alt="" />
            <img className='saturn parallax scale-saturn' data-speed-x="0.1" data-speed-y="0.2" data-scale=".0005" src={saturn} alt="" />
            <img className='rocket parallax scale-rocket' data-speed-x="0.9" data-speed-y="0.6" data-scale=".003" src={rocket} alt="" />
            {/* <img className='satellite scale-satellite' data-speed="0.1" src={satellite} alt="" /> */}
            <img className='satellite parallax scale-satellite' data-speed-x="0.1" data-speed-y="0.1" data-scale=".0013" src={satellite} alt="" />
        </>
    )
}

export default HomePage;