import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Array of project objects with title, description, image, and tech stack
const projects = [
    {
        title: "Restaurant Online Ordering System",
        description: "A full-stack web application and first-delve into learning React Native. Created for cross-platform use.",
        image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
        techStack: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "CSS", icon: "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" }
        ]
    },
    {
        title: "Multi-Threaded Packet Sniffing Application",
        description: "Coursework project to create a multi-threaded packet-sniffing application in C to detect malicious intrusions. Focused on detecting SYN Flood attacks, ARP response packets, and HTTP requests from blacklisted URLs.",
        image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
        techStack: [
            { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" }
        ]
    },
    {
        title: "Minimax Algorithm Application in 'Connect-N'",
        description: "Coursework project to create an AI player using the Minimax algorithm with alpha-beta pruning to play the game 'Connect-N'.",
        image: "https://atlas-content-cdn.pixelsquid.com/stock-images/connect-4-board-games-2M094K2-600.jpg",
        techStack: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
        ]
    },
    {
        title: "EventByte - Event Management Web Application",
        description: "Coursework project to create an online platform for event management, complete with administrator privileges to upload ticketed events and manage user bookings, with seperate system for users to buy and cancel bookings.",
        image: "/components/eventbytepng.png",
        techStack: [
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
        ]
    }
];

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; // Keep updated with number of projects on website.
    const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <h3 className="text-3xl font-bold text-white">Projects</h3>
            <div className="max-w-2xl mx-auto mt-8"> {/* Container with max width */}
                <Carousel
                    showThumbs={false} // Removes thumbnails to save space
                    className="custom-carousel" // Add a custom class for styling#
                    infiniteLoop={true} // Allows infinite scrolling
                    autoPlay={true} // Automatically scrolls through images
                    emulateTouch={true} // Allows touch gestures on mobile
                    dynamicHeight={false}
                    onChange={handleSlideChange}
                    selectedItem={currentSlide}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-lg p-6 h-[360px]">
                            {/* Project Image */}
                            <div className="w-full lg:w-1/3 flex justify-center">
                                <img src={project.image} alt={project.title} className="rounded-lg shadow-md object-cover w-full h-60" />
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-2/3 flex flex-col justify-between px-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                    <p className="text-gray-400 mt-2">{project.description}</p>
                                </div>

                                {/* Tech Stack Icons */}
                                <div className="flex justify-start gap-4 mt-4 mb-11 p-5">
                                    {project.techStack.map((tech, techIndex) => (
                                        <div className="p-1 transition-transform duration-200 ease-in-out hover:scale-125">
                                            <img key={techIndex} src={tech.icon} alt={tech.name} className="w-8 h-8 max-w-[32px] max-h-[32px] object-contain aspect-auto transition-transform duration-200 ease-in-out hover:scale-125" title={tech.name} />
                                        </div>
                                    ))}
                                </div>

                                {/* View Project Button
                                <div className="mt-6">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition"
                                    >
                                        View Project
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </Carousel>

                <div className="pt-10">
                    <span id="ProgressLabel" className="sr-only">Loading</span>

                    <span
                        role="progressbar"
                        aria-labelledby="ProgressLabel"
                        aria-valuenow={progressPercentage}
                        className="block rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                        <span
                        className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
                        style={{width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out'}}
                        >
                        </span>
                    </span>
                    </div>
            </div>
        </>
    );
};

export default Projects;