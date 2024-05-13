import React from 'react';

const AboutUsPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Sahayak, we believe that everyone deserves the opportunity to communicate, learn, and thrive, regardless of physical or cognitive challenges. With our pioneering hardware and software solutions, we're on a mission to revolutionize accessibility and empowerment for all.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Team Member 1 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="pks.jpg"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Pratik Sinha</h2>
                <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="Ayushka_Behere.jpg"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Ayushka Behere</h2>
                <h3 className="text-gray-500 mb-3">UI and Frontend Developer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="Dev.jpg"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Dev Chaudhary</h2>
                <h3 className="text-gray-500 mb-3">UI and Hardware team</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="chetna.jpeg"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Chetna Agnihotri</h2>
                <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 5 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/204x204"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Anurag</h2>
                <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 6 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/205x205"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Priyam Mishra</h2>
                <h3 className="text-gray-500 mb-3">Hardware team</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 7 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/206x206"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Adya Singh</h2>
                <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 8 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="Priyanshi.jpg"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Priyanshi Singh</h2>
                <h3 className="text-gray-500 mb-3">Content Writer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          {/* Team Member 9 */}
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/208x208"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Sourabh Tillu</h2>
                <h3 className="text-gray-500 mb-3">Content Writer</h3>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
