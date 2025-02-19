import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;
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
                    <div id = "project1">
                        <div className='flex flex-col items-center'>
                            <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" /> 
                            <p className="legend">Restaurant Online Ordering System</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
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
                        style={{width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out'}}                        ></span>
                    </span>
                    </div>
            </div>
        </>
    );
};

export default Projects;