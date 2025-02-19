const Education = () => {
    return (
    <>
    <h3 className="text-3xl font-bold text-white mb-10">Education</h3>
        <div id="education_items" className="flex flex-row w-full items-center justify-center gap-5 h-full mb-5">
          {/* University of Warwick information */}
          <a href="https://warwick.ac.uk/" className="group relative block bg-black w-180 h-full">
            <img
              alt=""
              src="https://media.studentcrowd.net/w1200/index-data/20240118113852-oculus-3-2.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-2 sm:p-6 lg:p-8">
              <p className="text-sm font-medium tracking-widest text-pink-600 uppercase">University</p>

              <p className="text-xl font-bold text-white sm:text-2xl">Warwick</p>

              <div className="mt-16 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-6 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-l text-white">
                    <span className="font-bold">BSc Computer Science, 2023-2026</span><br />
                    <span className="indent-4">Key Modules:
                    <ul className="list-disc">
                      <li>Software Engineering</li>
                      <li>Artificial Intelligence</li>
                      <li>Databases</li>
                      <li>Algorithms & Data Structures</li>
                      <li>Operating Systems</li>
                    </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* RGS Information */}
          <a href="https://www.rgshw.com/" className="group relative block bg-black w-180 h-full">
            <img
              alt=""
              src="https://www.ventrolla.co.uk/wp-content/uploads/2018/10/grammar-school3-1024x768-1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-2 sm:p-6 lg:p-8">
              <p className="text-sm font-medium tracking-widest text-pink-600 uppercase">A-Levels & GCSEs</p>

              <p className="text-xl font-bold text-white sm:text-2xl">The Royal Grammar School, High Wycombe</p>

              <div className="mt-16 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-l text-white">
                    <span className="font-bold">Sixth Form, 2021-2023</span><br /></p>
                    <ul className="list-disc text-l text-white">
                      <li>A* - Mathematics</li>
                      <li>A* - Further Mathematics</li>
                      <li>A - Computer Science</li>
                      <li>A - Physics</li>
                    </ul>
                    <br />
                    <span className="font-bold text-l text-white">GCSEs, 2019-2021</span><br />
                    <ul className="list-disc text-l text-white">
                      <li>Six 9s & Five 8s incl. Triple Science, Further Maths & Computer Science</li>
                    </ul>
                  
                </div>
              </div>
            </div>
          </a>
        </div>
        </>
    );
};

export default Education;