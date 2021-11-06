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
    const handleScroll = () => setOffset(window.pageYOffset);
    
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
                element.style.transform = `matrix(${1 - (offset * .0007)}, 0, 0, ${1 - (offset * .0007)}, -${offset * element.dataset.speedX}, -${offset * element.dataset.speedX})`
            }
            // console.log(element.dataset)
            if(element.className.includes('scale-saturn')) {
                element.style.transform = `matrix(${1 - (offset * .002)}, 0, 0, ${1 - (offset * .002)}, -${offset * element.dataset.speed}, ${offset * element.dataset.speed})`
            }
            if(element.className.includes('scale-satellite')) {
                
                // if(offset < 150) {
                    element.style.transform = `translate(${(offset - 120) * speed * 17}px, -${((offset-120) * speed) ** 2}px)`
                    // console.log(offset * speed * 10)
                // } else {
                    // element.style.transform = `translate(${(150 - ((offset - 150) * speed * 10))}px, ${(offset * speed) ** 2}px)`
                // }
                // element.style.transform = `translateY(${Math.sqrt(10 ** 2 - (offset * speed)**2)}px)`;
                // element.style.transform = `matrix(${1 - (offset * .001)}, 0, 0, ${1 - (offset * .001)}, ${(offset * element.dataset.speed)}, -${Math.sqrt(6400 - ((offset * element.dataset.speed) ** 2 * 6400) / 3600)})`
            }
        })
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    // const parallax = document.querySelectorAll(".parallax");

    // window.addEventListener("scroll", () => {
    //     let scroll = window.pageYOffset;
    //     parallax.forEach((element) => {
    //         const speed = element.dataset.speed;
    //         element.style.transform = `translateY(-${scroll * speed}px)`
    //     })
    // })
    

    return (
        <>
            <h3 className='homepage-title'>Discover the Possibilities</h3>
            {/* earth is not centering on page reload */}
            <img className='earth' data-speed="0.7" src={earth} alt="" />
            <img className='moon parallax scale-moon' data-speed-x="0.3" src={moon} alt="" />
            <img className='saturn parallax scale-saturn' data-speed="0.3" src={saturn} alt="" />
            <img className='rocket parallax scale-rocket' data-speed="0.9" src={rocket} alt="" />
            <img className='satellite parallax scale-satellite' data-speed="0.1" src={satellite} alt="" />
        </>
    )
}

export default HomePage;