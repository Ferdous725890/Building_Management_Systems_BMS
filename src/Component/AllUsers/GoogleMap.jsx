const LocationSection = () => {
    return (
      <section id="location" className="px-[2px]">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
          <p className="text-lg text-gray-600 mb-8">
            Skyline Apartments is located in the heart of the city, offering easy access to major landmarks, shopping malls, and public transportation.
          </p>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">123 Skyline Street, City Center, Metropolis</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509366!2d144.95373561531683!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4edab0b8968!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614768258947!5m2!1sen!2sus"
              width="100%"
              height="500"
              
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default LocationSection;
  