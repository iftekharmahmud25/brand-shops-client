import { useEffect, useState } from "react";


const Banner = () => {
  const backgroundImages = [
    'https://i.ibb.co/Mck9gnf/apple-banner.png',
    'https://i.ibb.co/bg6YBR8/samsung-s22-ultra.jpg',
    'https://i.ibb.co/qgdcG4X/photo-1531297484001-80022131f5a1-auto-format-fit-crop-q-80-ixlib-rb-4-0.jpg',
    'https://i.ibb.co/4RKH6w1/somas-banner.jpg',
    'https://i.ibb.co/85SvFYB/Google-shutterstock-1054121114-750x406.jpg',
    'https://i.ibb.co/yNNzvSS/images-q-tbn-ANd9-Gc-R2-HGeg6amvl16-Xlts-Ibl-Gq-GOnnq0y-Ag12yrg-usqp-CAU.jpg',
    'https://i.ibb.co/qWM9VCC/images-q-tbn-ANd9-Gc-Sg6ojzb-YT8vg-Qt-Flc2thlp-Oqn-C8-Mz-Pl7ya-T-IPxgi-Mw-Nv-Xjw-Ub-JXUq-E75mo-FULO8.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % backgroundImages.length);
  };
  useEffect(() => {
    const timer = setInterval(nextImage, 2000); // Change image every 5 seconds (5000 milliseconds)

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [currentIndex]);

    return (
        <div className="hero md:h-[300px] h-[280px] lg:h-[400px]"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
        }}
       >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-4xl text-3xl lg:text-5xl font-bold text-white">Welcome to <br /> <span className="bg-gradient-to-r from-red-600 via-red-900 to-red-600 text-transparent bg-clip-text">tech-Universe!!!</span></h1>
      <p className="mb-3 md:text-lg text-sm text-gray-300">Discover a World of Premium Brands and Their Exceptional Products <span className="bg-gradient-to-r from-red-600  to-red-900 text-transparent hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600 bg-clip-text text-xl ">&#9829;</span></p>
    </div>
  </div>
</div>
    );
};

export default Banner;