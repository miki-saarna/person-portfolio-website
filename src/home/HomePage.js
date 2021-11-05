import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "../utils/ParallaxImg";
import portrait from "../images/portfolio-portrait.jpg";
import mountainA from "../images/mountainA.png";
import mountainB from "../images/mountainB.png";
import moon from "../images/moon.png";
import stars from "../images/stars.png";

const HomePage = () => {
    
    const [offset, setOffset] = useState(0);
    // const [offsetX, setOffsetX] = useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const parallax = document.querySelectorAll(".translate");

        parallax.forEach((element) => {
            // element.style.transform = `translateY(${offset * element.dataset.speed}px)`; 
            // element.style.transform = `translate(${offset * element.id}px, ${offset * element.dataset.speed}px)`; 
            // element.style.transform = `scale(${1 + (offset * .01)}, ${1 + (offset * .01)})`;
            element.style.transform = `matrix(${1 + (offset * .008)}, 0, 0, ${1 + (offset * .008)}, ${offset * element.id}, ${offset * element.dataset.speed})`
            // element.style.transform = `translateX(${offset * element.dataset.speed}px)`; 
        })
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    // const translate = document.querySelectorAll(".translate");


    // window.addEventListener("scroll", () => {
    //     let scroll = window.pageYOffset;

    //     translate.forEach((element) => {
    //         const speed = element.dataset.speed;
    //         element.style.transform = `translateY(${scroll * speed}px)`
    //     })
    // })
    

    return (
        <>
            <div className="parallax-container">
                {/* <h1 className="para-title">Discover what's possible</h1> */}
                    <img className="mountainA translate " id="-1" src={mountainA} data-speed="-0.2" />
                    <img className="mountainB translate" id="1" src={mountainB} data-speed="-0.3" />
                    <img className="moon translate" id="portrait" src={moon} data-speed="0.5" />
                    <img className="stars" id="portrait" src={stars} data-speed="0.9" />
                <div className="test"></div>
            </div>
             <div className="test2"></div>
            {/*    <ParallaxProvider>
                    <ParallaxImg className="red" src={portrait} height="300px" dataSpeed=".2">

                    </ParallaxImg> */}
                {/* </ParallaxProvider> */}
            {/* <div className="test2"></div> */}

            <img className="portrait-image" id="portrait" src={portrait} alt="A portrait of myself" data-speed="0.5" />
            <div className="box"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
            <div className="box-4"></div>
        </>
    )
}

export default HomePage;