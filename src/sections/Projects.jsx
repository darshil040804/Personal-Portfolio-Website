import { myProjects } from "../constants/index.js";
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Slider from "react-slick";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    const total = myProjects.length;
    const maxDots = 5;
    const visible = Math.min(total, maxDots);

    // sliding window for dots
    let start = 0;
    if (total > maxDots) {
        const mid = Math.floor(maxDots / 2);
        if (current <= mid) start = 0;
        else if (current >= total - mid - 1) start = total - maxDots;
        else start = current - mid;
    }
    const dotIndices = Array.from({ length: visible }, (_, i) => start + i);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, next) => setCurrent(next),
    };

    const goTo = idx => sliderRef.current?.slickGoTo(idx);

    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">My Work</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch mt-12 gap-5 w-full">
                {/* LEFT: Project card */}
                <div className="flex flex-col gap-5 relative p-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 ">

                    {/* Spotlight (always on top) */}
                    <div className="absolute top-0 right-0 pointer-events-none">
                        <img
                            src={myProjects[current].spotlight}
                            alt="spotlight"
                            className="w-full h-64 object-cover rounded-tr-xl rounded-bl-xl"
                        />
                    </div>

                    {/* Slides (inner transparent box) */}
                    <Slider ref={sliderRef} {...settings} className="hidden">
                        {myProjects.map((proj, idx) => (
                            <div key={proj.title}>
                                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">

                                    <img
                                        src={proj.logo}
                                        alt="logo"
                                        className="w-10 h-10 shadow-sm"
                                        //style={myProjects[proj].logoStyle}
                                    />
                                    <div className="flec flex-col gap-5 text-white-600 my-5">
                                        <p className="text-white text-2xl font-semibold animatedText">
                                            {proj.title}
                                        </p>
                                        <p className="animatedTest">{proj.desc}</p>
                                        <p className="animatedTest">{proj.subdesc}</p>
                                    </div>

                                    {/* Count pill (static in inner box) */}
                                    {idx === current && (
                                        <div className="absolute top-4 right-4 bg-white/10 text-white text-sm rounded-full px-3 py-1">
                                            {current + 1}/{total}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-3 px-2">
                        {myProjects[current].tags.map(tag => (
                            <div
                                key={tag.id}
                                className="relative group"
                                onMouseMove={(e) => {
                                    const tooltip = e.currentTarget.querySelector('.tooltip');
                                    if (tooltip) {
                                        tooltip.style.left = `${e.clientX + 10}px`;
                                        tooltip.style.top = `${e.clientY + 10}px`;
                                    }
                                }}
                            >
                                <div className="tech-logo group-hover:bg-neutral-100 group-hover:bg-opacity-20 transition-all duration-300">
                                    <img src={tag.path} alt={tag.name} className="w-6 h-6" />
                                </div>
                                <div className="tooltip fixed opacity-0 group-hover:opacity-100 px-2 py-1 bg-gray-800 rounded-md text-white text-xs whitespace-nowrap transition-opacity duration-300 pointer-events-none z-50">
                                    {tag.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project links as buttons (positioned on the left) */}
                    <div className="px-2 flex gap-4">
                        <a
                            href={myProjects[current].href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/70 to-blue-500/70 text-white hover:from-purple-600/70 hover:to-blue-600/70 transition-all flex items-center"
                        >
                            GitHub Repo
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 inline-block ml-1" />
                        </a>
                        {myProjects[current].liveLink && (
                            <a
                                href={myProjects[current].liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/70 to-teal-500/70 text-white hover:from-green-600/70 hover:to-teal-600/70 transition-all flex items-center"
                            >
                                Live Link
                                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 inline-block ml-1" />
                            </a>
                        )}
                    </div>

                    {/* Controls: Prev, Dots, Next (below link) */}
                    <div className="mt-4 flex items-center justify-between">
                        {/* Prev */}
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="arrow-btn"
                            aria-label="Previous Project"
                        >
                            <img src="/assets/left-arrow.png" alt="Previous" className="w-4 h-4" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center space-x-2">
                            {dotIndices.map(idx => {
                                const active = idx === current;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => goTo(idx)}
                                        className={`rounded-full transition-all ${
                                            active ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-white/50'
                                        }`}
                                        aria-label={`Go to project ${idx + 1}`}
                                    />
                                );
                            })}
                        </div>

                        {/* Next */}
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="arrow-btn"
                            aria-label="Next Project"
                        >
                            <img src="/assets/right-arrow.png" alt="Next" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* RIGHT: persistent 3D canvas */}
                <div className="hidden lg:block border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas
                        gl={{
                            antialias: true,
                            alpha: true,
                            preserveDrawingBuffer: true,
                            powerPreference: "high-performance"
                        }}
                        dpr={[1, 2]} // Responsive to device pixel ratio for better quality on high-DPI displays
                    >
                        <ambientLight intensity={3} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Center>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={myProjects[current].texture} />
                                </group>
                            </Center>
                        </Suspense>
                        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;