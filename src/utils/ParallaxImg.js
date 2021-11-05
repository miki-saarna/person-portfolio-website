import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = ({ className, src, dataSpeed, height, children }) => {
    return (
        <ParallaxBanner
            className={className}
            layers={[{ image: src, amount: dataSpeed }]}
            style={{ height: height }}
        >
                <div>
                    { children }
                </div>
        </ParallaxBanner>
    )
}

export default ParallaxImg;