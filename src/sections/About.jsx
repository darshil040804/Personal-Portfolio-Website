import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { navLinks } from "../constants/index.js";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy= () => {
        navigator.clipboard.writeText('darshil.desai.040804@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }

    const technologies = [
        { name: 'Python', src: '/assets/python.png' },
        { name: 'Java', src: '/assets/java.png' },
        { name: 'C++', src: '/assets/cpp.png' },
        { name: 'JavaScript', src: '/assets/javascript.png' },
        { name: 'HTML', src: '/assets/html.png' },
        { name: 'CSS', src: '/assets/css.png' },
        { name: 'ReactJS', src: '/assets/react.svg' },
        { name: 'Tailwind CSS', src: '/assets/tailwindcss.png' },
        { name: 'NextJS', src: '/assets/nextjs.png' },
        { name: 'NodeJS', src: '/assets/node-js.png' },
        { name: 'MongoDB', src: '/assets/mongo-db.png' },
        { name: 'ThreeJS', src: '/assets/threejs.png' },
        { name: 'Git', src: '/assets/git.png' },
        { name: 'GitHub', src: '/assets/github.svg' },
        { name: 'Appwrite', src: '/assets/appwrite-logo.png' },
        { name: 'PuterJS', src: '/assets/puter-logo.png' },



        // You can easily add more technologies here in the future!
    ];

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container p-8 sm:p-11">
                        <div className="border border-white-300 bg-gray-500 rounded-lg w-full aspect-square overflow-hidden">
                            <img src="/assets/ghibli-headshot.png" alt="Darshil Desai Headshot" className="w-full h-full object-cover"/>
                        </div>
                        <div className="mt-6">
                            <p className="grid-headtext"> Hi, I am Darshil </p>
                            <p className="grid-subtext"> Having 2 years of experience, I have honed my skills in full-stack app development.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Tech Stack section moved to the bottom with appropriate padding */}
                        <div className="grid grid-cols-4 gap-3.5 mb-4 px-4 mt-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseMove={(e) => {
                                        const tooltip = e.currentTarget.querySelector('.tooltip');
                                        if (tooltip) {
                                            tooltip.style.left = `${e.clientX + 10}px`;
                                            tooltip.style.top = `${e.clientY + 10}px`;
                                        }
                                    }}
                                >
                                    <div className="tech-stack group-hover:bg-neutral-100 group-hover:bg-opacity-20 transition-all animate-in fade-in duration-1000">
                                        <img src={tech.src} alt={tech.name} className="w-25 h-25 object-contain" />
                                    </div>
                                    <div className="tooltip fixed opacity-0 group-hover:opacity-100 px-2 py-1 bg-gray-800 rounded-md text-white text-xs whitespace-nowrap transition-opacity duration-300 pointer-events-none z-50">
                                        {tech.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2">
                            <p className="grid-headtext"> Tech Stack</p>
                            <p className="grid-subtext mt-2"> I am proficient in Python, C++, Java, Html, CSS, JavaScript & SQL </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                                   showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones
                            </p>
                            <p className="grid-subtext">
                                I'm based in East Lansing, MI, with remote work available. I'm also open to relocation within USA
                            </p>
                            <a href={ navLinks[3].href } className={"w-fit"}>
                                <Button name="Contact Me" isBeam containerClass="w-full mt-20"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext mt-10">
                                My passion for coding
                            </p>
                            <p className="grid-subtext">
                                I love turning ideas into real things through code. Solving tricky problems and building products feels like solving puzzles and that’s what keeps me hooked. Coding isn’t just work for me, it’s something I genuinely enjoy doing every day.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[126px] h-fit object-cover sm:object-top" />
                        <div>
                            <p className="grid-subtext text-center">
                                Contact Me
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                                    darshil.desai.040804@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About