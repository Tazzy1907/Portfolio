const Education = () => {
    return (
    <>
    <h3 class="text-3xl font-bold text-white mb-10">Education</h3>
        <div id="education_items" class="flex flex-row w-full items-center justify-center gap-5 h-full mb-5">
          {/* University of Warwick information */}
          <a href="https://warwick.ac.uk/" class="group relative block bg-black w-180 h-full">
            <img
              alt=""
              src="https://media.studentcrowd.net/w1200/index-data/20240118113852-oculus-3-2.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div class="relative p-2 sm:p-6 lg:p-8">
              <p class="text-sm font-medium tracking-widest text-pink-600 uppercase">University</p>

              <p class="text-xl font-bold text-white sm:text-2xl">Warwick</p>

              <div class="mt-16 sm:mt-48 lg:mt-64">
                <div
                  class="translate-y-6 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-l text-white">
                    <span class="font-bold">BSc Computer Science, 2023-2026</span><br />
                    <span class="indent-4">Key Modules:
                    <ul class="list-disc">
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
          <a href="https://www.rgshw.com/" class="group relative block bg-black w-180 h-full">
            <img
              alt=""
              src="https://www.ventrolla.co.uk/wp-content/uploads/2018/10/grammar-school3-1024x768-1.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div class="relative p-2 sm:p-6 lg:p-8">
              <p class="text-sm font-medium tracking-widest text-pink-600 uppercase">A-Levels & GCSEs</p>

              <p class="text-xl font-bold text-white sm:text-2xl">The Royal Grammar School, High Wycombe</p>

              <div class="mt-16 sm:mt-48 lg:mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-l text-white">
                    <span class="font-bold">Sixth Form, 2021-2023</span><br />
                    <ul class="list-disc">
                      <li>A* - Mathematics</li>
                      <li>A* - Further Mathematics</li>
                      <li>A - Computer Science</li>
                      <li>A - Physics</li>
                    </ul>
                    <br />
                    <span class="font-bold">GCSEs, 2019-2021</span><br />
                    <ul class="list-disc">
                      <li>Six 9s & Five 8s incl. Triple Science, Further Maths & Computer Science</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        </>
    );
};

export default Education;