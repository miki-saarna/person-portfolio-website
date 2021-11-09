import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "../utils/ParallaxImg";
import portrait from "../images/portfolio-portrait.jpg";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import saturn from "../images/saturn.png";
import rocket from "../images/rocket.png";
import satellite from "../images/satellite.png";

const HomePage = () => {
    
    const [offset, setOffset] = useState(0);
    const [radians, setRadians] = useState(0);

    const handleScroll = () => setOffset(window.pageYOffset);

    let satelliteMovement = 0;

    function satelliteOrbit() {
        const radiusX = 95;
        const radiusY = 50;
        const velocity = 0.02;
        
        satelliteMovement += velocity

        const satellite = document.querySelector('.scale-satellite')
        // setRadians(offset * velocity);
        satellite.style.transform = `translate(${Math.cos(satelliteMovement) * radiusX}px, ${Math.sin(satelliteMovement) * radiusY + Math.cos(satelliteMovement) * radiusX}px) scale(${Math.sin(satelliteMovement) + 1.3}) rotate(0deg) `
            
        // adjust z-index based on if element is 'in-front' or 'behind' the earth
        Math.sin(satelliteMovement) < 0 
            ? satellite.style.zIndex = 2
            : satellite.style.zIndex = 4

        requestAnimationFrame(satelliteOrbit);
    }
    // seems interferred by change in state
    window.requestAnimationFrame(satelliteOrbit);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const parallax = document.querySelectorAll(".parallax");

        parallax.forEach((element) => {
            const speed = element.dataset.speed;
            // if(!element.className.includes('scale-rocket')) {
            //     element.style.transform = `translateY(-${offset * speed}px)`;
            // }
            if(element.className.includes('scale-rocket')) {
                element.style.transform = `matrix(${1 + (offset * .003)}, 0, 0, ${1 + (offset * .003)}, ${offset * element.dataset.speed}, -${offset * element.dataset.speed})`
                // element.style.transform = `matrix(${1 + (offset * .008)}, 0, 0, ${1 + (offset * .008)}, ${offset * element.id}, ${offset * element.dataset.speed})`
            }
            if(element.className.includes('scale-moon')) {
                element.style.transform = `matrix(${1 - (offset * .0007)}, 0, 0, ${1 - (offset * .0007)}, -${offset * element.dataset.speedX}, -${offset * element.dataset.speedX}) rotate(215deg)`
            }
            // console.log(element.dataset)
            if(element.className.includes('scale-saturn')) {
                element.style.transform = `matrix(${1 - (offset * .002)}, 0, 0, ${1 - (offset * .002)}, -${offset * element.dataset.speed}, ${offset * element.dataset.speed})`
            }
            // if(element.className.includes('scale-satellite')) {

                // formula for a parabola
                // element.style.transform = `translate(${offset * speed * 17}px, -${((offset - 100) * speed) ** 2}px)`;
                
                // const radiusX = 95;
                // const radiusY = 50;
                // const velocity = 0.05;
                
                // creates a circular motion
                // element.style.transform = `translate(${Math.cos(radians) * radiusX}px, ${Math.sin(radians) * radiusX}px) scale(${Math.sin(radians) + 1.3}) rotate(0deg) `

                // creates an ellipse motion
                // setRadians(offset * velocity);
                // element.style.transform = `translate(${Math.cos(radians) * radiusX}px, ${Math.sin(radians) * radiusY + Math.cos(radians) * radiusX}px) scale(${Math.sin(radians) + 1.3}) rotate(0deg) `
                    
                // adjust z-index based on if element is 'in-front' or 'behind' the earth
                // Math.sin(radians) < 0 
                //     ? element.style.zIndex = 2
                //     : element.style.zIndex = 4
                    
            // }
        })
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);



    return (
        <>
            <h3 className='homepage-title'>Discover the Possibilities</h3>
            {/* earth is not centering on page reload */}
            <img className='earth' data-speed="0.7" src={earth} alt="" />
            <img className='moon parallax scale-moon' data-speed-x="0.3" data-speed-y="0.4" src={moon} alt="" />
            <img className='saturn parallax scale-saturn' data-speed="0.3" src={saturn} alt="" />
            <img className='rocket parallax scale-rocket' data-speed="0.9" src={rocket} alt="" />
            <img className='satellite scale-satellite' data-speed="0.1" src={satellite} alt="" />
            {/* <img className='satellite parallax scale-satellite' data-speed="0.1" src={satellite} alt="" /> */}
        </>
    )
}

export default HomePage;