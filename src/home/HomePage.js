import React, { useState, useEffect } from "react";
import { debounce } from "lodash";


import ParallaxImg from "../utils/ParallaxImg";

import portrait from "../images/portfolio-portrait.jpg";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import saturn from "../images/saturn.png";
import rocket from "../images/rocket.png";
import satellite from "../images/satellite.png";
import portfolioYubiwa from "../images/portfolio-yubiwa.png";



const HomePage = () => {
    
    
    const [offset, setOffset] = useState(0);
    const [offset2, setOffset2] = useState(0);

    
    const handleScroll = () => setOffset(window.pageYOffset);
    const handleScroll2 = () => setOffset2(window.pageYOffset);
    

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
                element.style.transform = `matrix(${1 - (offset * scale)}, 0, 0, ${1 - (offset * scale)}, -${offset * speedX}, -${offset * speedY})`
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
            // if(element.className.includes('homepage-title')) {
                // element.style.transition = `all .1s ease`;
                // element.style.transform = `translateY(-${offset * speedY}px)`
                // element.style.transform = `translateY(-${offset * speedY}px) scale(${1 + (offset * scale)}, ${1 + (offset * scale)})`
                
            // }
        })
    const reveal = document.querySelector(".reveal");

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

    
    const speedY = reveal.dataset.speedY;
    const scale = reveal.dataset.scale;
    
    if(revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
            reveal.style.opacity = `${offset * speedY * .3}`
            reveal.style.transition = `all .15s ease`
            reveal.style.transform = `translateY(-${offset * speedY}px) scale(${1 + (offset * scale)}, ${1 + (offset * scale)})`
    } 

    const reveal2 = document.querySelector(".reveal2");
    
        
            const windowHeight2 = window.innerHeight;
            const revealTop2 = reveal2.getBoundingClientRect().top;
            
            
            let revealPoint2 = 10;
            if(window.innerWidth < 768) {
              revealPoint2 = 300
            } else if(window.innerWidth < 1024) {
              revealPoint2 = 150
            } else if(window.innerWidth < 1200) {
              revealPoint2 = 150
            } else {
              revealPoint2 = 150
            }
        // console.log(revealTop2)
            
        if(revealTop2 < windowHeight2 - revealPoint2) {
            reveal2.style.transition = `all .15s ease` 
            // reveal2.style.opacity = `1`
            reveal2.style.transform = `translateY(-${offset * speedY}px) scale(${1 + (offset * .15 * scale)}, ${1 + (offset * .15 * scale)})`
            }

        if(revealTop2 < windowHeight2 - revealPoint2 && revealTop2 > 300) {
            reveal2.style.opacity = `1`
        } else if(revealTop2 < windowHeight2 - revealPoint2 && revealTop2 < 301) {
            reveal2.style.opacity = `${1 - offset * 0.003}`
            console.log(offset)
        }
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);


    // section fade in
// useEffect(() => {
//     const reveal = document.querySelector(".reveal");

//     window.addEventListener("scroll", () => {
//         const windowHeight = window.innerHeight;
//         const revealTop = reveal.getBoundingClientRect().top;
        
//         let revealPoint = 10;
//         if(window.innerWidth < 768) {
//           revealPoint = 400
//         } else if(window.innerWidth < 1024) {
//           revealPoint = 150
//         } else if(window.innerWidth < 1200) {
//           revealPoint = 150
//         } else {
//           revealPoint = 150
//         }
    
        
//         const speedY = reveal.dataset.speedY;
//         const scale = reveal.dataset.scale;
        
//         if(revealTop < windowHeight - revealPoint) {
//             reveal.classList.add('active');
//             setInterval(() => { 
//                 const offsetAfterTwoSeconds = window.pageYOffset;
                
                
//                 reveal.style.transition = `all .05s ease`
//                 reveal.style.transform = `translateY(-${(offset - offsetAfterTwoSeconds) * speedY}px) scale(${1 + ((offset - offsetAfterTwoSeconds) * scale)}, ${1 + ((offset - offsetAfterTwoSeconds) * scale)})`
                

//             }, 2000)
//         } else {
//             reveal.classList.remove('active');
//         }
//     });
//     // return () => window.removeEventListener("scroll", handleScroll);
// },[]);

    // section fade in
    // useEffect(() => {
    //     const reveal2 = document.querySelector(".reveal2");
    
    //     window.addEventListener("scroll", () => {
    //         const windowHeight = window.innerHeight;
    //         const revealTop = reveal2.getBoundingClientRect().top;
            
            
    //         let revealPoint = 10;
    //         if(window.innerWidth < 768) {
    //           revealPoint = 300
    //         } else if(window.innerWidth < 1024) {
    //           revealPoint = 150
    //         } else if(window.innerWidth < 1200) {
    //           revealPoint = 150
    //         } else {
    //           revealPoint = 150
    //         }
        
            
    //         if(revealTop < windowHeight - revealPoint) {
    //             reveal.classList.add('active');
    //             setInterval(() => { reveal.style.transition = `all .05s ease` }, 2000)
    //         } else {
    //             reveal.classList.remove('active');
    //         }
    //     });
    // // return () => window.removeEventListener("scroll", handleScroll);

    // },[]);

    return (
        <>
            <h3 className='homepage-title parallax reveal' data-speed-y="0.1" data-scale=".01">Discover</h3>
            <h3 className='possibilities reveal2' data-speed-y="0.1" data-scale=".005"> The Possibilities</h3>
            {/* earth is not centering on page reload */}
            <img className='earth' data-speed="0.7" src={earth} alt="" />
            <img className='moon parallax scale-moon' data-speed-x="0.3" data-speed-y="0.4" data-scale=".0007" src={moon} alt="" />
            <img className='saturn parallax scale-saturn' data-speed-x="0.1" data-speed-y="0.2" data-scale=".0005" src={saturn} alt="" />
            <img className='rocket parallax scale-rocket' data-speed-x="0.9" data-speed-y="0.6" data-scale=".003" src={rocket} alt="" />
            <img className='satellite parallax scale-satellite' data-speed-x="0.1" data-speed-y="0.1" data-scale=".0013" src={satellite} alt="" />
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div>
                    <div>
                        <h3>Yubiwa</h3>
                        <img src={portfolioYubiwa} />
                        <div className="gradient"></div>
                    </div>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <img src="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;