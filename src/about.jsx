import { AnimatedText } from "animated-backgrounds";


const AboutMe = () => {
    return (
    <>
        <h3 class="text-3xl font-bold text-white">About Me</h3>

        <div id="title">
            <h1 class="text-6xl font-bold text-center text-white hover:text-blue-600 transition duration-300 ease-in-out">
                <AnimatedText text="Tanaz Siriwardena" effect="rainbow" config={{
                speed: 100,
                loop: true,
                delay: 1000,
                color: '#ff0000'
                }} />
            </h1>
        </div>
        
        <div id="aboutMeContent" class="m-10 text-xl text-center">
            <p class="text-white">
                Motivated full-stack software developer specialising in Java and Python backend. Eager to apply skills in real-world projects through internships.
                Proven ability to collaborate in team settings and lead through senior management experience.
            </p>
        </div>

        
    </>
    );
}

export default AboutMe;