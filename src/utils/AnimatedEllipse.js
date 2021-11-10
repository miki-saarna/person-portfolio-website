let satelliteMovement = 0;
    
    function satelliteOrbit() {
        const radiusX = 95;
        const radiusY = 50;
        const velocity = 0.02;
        
        satelliteMovement += velocity

        const satellite = document.querySelector('.scale-satellite');
        
        satellite.style.transform = `translate(${Math.cos(satelliteMovement) * radiusX}px, ${Math.sin(satelliteMovement) * radiusY + Math.cos(satelliteMovement) * radiusX}px) scale(${Math.sin(satelliteMovement) + 1.3}) rotate(0deg) `
            
        // adjust z-index based on if element is 'in-front' or 'behind' the earth
        Math.sin(satelliteMovement) < 0 
            ? satellite.style.zIndex = 2
            : satellite.style.zIndex = 4

        requestAnimationFrame(satelliteOrbit);
    }
    window.requestAnimationFrame(satelliteOrbit);

    export default satelliteOrbit;