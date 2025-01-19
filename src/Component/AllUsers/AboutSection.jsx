const AboutBuilding = () => {
    return (
      <section id="about-building" className=" backdrop-blur-3xl mt-10 py-5 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About the Building</h2>
          <p className="text-sm text-white leading-relaxed mb-8 px-20">
            Welcome to <span className="font-bold text-blue-600">Skyline Apartments</span>, 
            a luxurious living experience designed to offer unparalleled comfort and convenience. 
            Our state-of-the-art facilities, including a rooftop garden, gym, and 24/7 security, 
            make this the perfect home for families and professionals alike. , Skyline Apartments combines modern living with easy access to everything 
            you need.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Highlight 1 */}
            <div className="rounded-lg shadow-md border pb-3  bg-white/10 ">
              <img 
                src="https://i.ibb.co.com/fXBjvt8/1-3704aed9-4ae6-414a-b0ed-95ec47e19a0b-600x600.webp" 
                alt="Luxurious Living" 
                className="w-full h-96 object-cover rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold text-white mb-2">Luxurious Living</h3>
              <p className="text-white text-sm w-[300px] mx-auto">Experience premium amenities, spacious apartments, and elegant interiors.</p>
            </div>
  
            {/* Highlight 2 */}
            <div className="rounded-lg shadow-md border pb-3 bg-white/10">
              <img 
                src="https://i.ibb.co.com/fXBjvt8/1-3704aed9-4ae6-414a-b0ed-95ec47e19a0b-600x600.webp" 
                alt="Prime Location" 
                className="w-full h-96 object-cover rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold text-white mb-2">Prime Location</h3>
              <p className="text-white text-sm w-[300px] mx-auto"justify-center items-center border>Situated in the city center, close to shopping, dining, and entertainment.</p>
            </div>
  
            {/* Highlight 3 */}
            <div className="rounded-lg shadow-md border  pb-3 bg-white/10">
              <img 
                src="https://i.ibb.co.com/fXBjvt8/1-3704aed9-4ae6-414a-b0ed-95ec47e19a0b-600x600.webp" 
                alt="Modern Facilities" 
                className="w-full h-96 object-cover rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold text-white mb-2">Modern Facilities</h3>
              <p className="text-white text-sm w-[300px] mx-auto "justify-center items-center border>Enjoy a rooftop garden, fitness center, and advanced security systems.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutBuilding;
  