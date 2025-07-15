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

            <div className="grid lg:grid-cols-2 grid-col-1 items-stretch mt-12 gap-5 w-full">
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
                    <Slider ref={sliderRef} {...settings} className="overflow-visible">
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
                            <div key={tag.id} className="tech-logo">
                                <img src={tag.path} alt={tag.name} className="w-6 h-6" />
                            </div>
                        ))}
                    </div>

                    {/* GitHub link (text only clickable, un-bolded) */}
                    <div className="px-2">
                        <a
                            href={myProjects[current].href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:underline"
                        >
                            Check GitHub Repo
                        </a>
                        <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 inline-block ml-1" />
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
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={3} />
                        <directionalLight position={[10, 10, 5]} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Center>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={myProjects[current].texture} />
                                </group>
                            </Center>
                        </Suspense>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;
