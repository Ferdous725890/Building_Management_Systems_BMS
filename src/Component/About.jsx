import React from "react";

const BuildingSection = () => {
  const buildingDetails = {
    name: "EliteBooking",
    location: "123 Main Street, Cityville",
    description:
      "EliteBooking is a state-of-the-art building featuring modern architecture and advanced building management systems. It is designed to provide comfort, safety",
    amenities: [
      "24/7 Security",
      "Fully Equipped Gym",
      "Rooftop Garden",
      "Underground Parking",
      "High-Speed Elevators",
      "Backup Power Supply",
    ],
    features: {
      totalFloors: 20,
      totalUnits: 150,
      builtYear: 2015,
    },
  };

  return (
    <section className="building-section p-6 rounded-lg  pt-20">
      <h2 className="text-3xl font-bold text-white mb-4 text-center pt-5">
        About {buildingDetails.name}
      </h2>

      <section className="building-section p-6 rounded-lg ">
      <h2 className="text-3xl font-bold text-white mb-4">EliteBooking</h2>
      <p className="text-white mb-6 w-full max-w-[900px]">
        EliteBooking is a modern architectural marvel located in the heart of
        Cityville. Designed with cutting-edge technology and sustainability in
        mind, it provides a perfect blend of luxury, convenience, and
        eco-friendly living. The building caters to both residential and
        commercial needs, ensuring a comfortable and secure environment for all
        its occupants.
      </p>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Key Highlights</h3>
        <ul className="list-disc pl-5 text-white">
          <li>
            <strong>Prime Location:</strong> Situated in the bustling downtown
            area, EliteBooking offers easy access to shopping centers,
            restaurants, schools, and public transportation hubs.
          </li>
          <li>
            <strong>State-of-the-Art Security:</strong> Equipped with 24/7 CCTV
            surveillance, access control systems, and trained security personnel
            to ensure the safety of all residents and businesses.
          </li>
          <li>
            <strong>Smart Building Features:</strong> Integrated with IoT
            devices and building management systems for efficient lighting,
            temperature control, and energy management.
          </li>
          <li>
            <strong>Green Initiatives:</strong> Solar panels, rainwater
            harvesting, and waste management systems contribute to a
            sustainable lifestyle.
          </li>
          <li>
            <strong>Luxury Lifestyle Amenities:</strong> From a spa and swimming
            pool to coworking spaces and a conference room, EliteBooking is
            designed to meet diverse needs.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Building Specifications</h3>
        <ul className="list-disc pl-5 text-white">
          <li>
            <strong>Total Floors:</strong> 20
          </li>
          <li>
            <strong>Residential Units:</strong> 100 luxury apartments
          </li>
          <li>
            <strong>Commercial Units:</strong> 50 office spaces
          </li>
          <li>
            <strong>Year Built:</strong> 2015
          </li>
          <li>
            <strong>Total Area:</strong> 50,000 square feet
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Additional Services</h3>
        <ul className="list-disc pl-5 text-white">
          <li>
            <strong>Concierge Desk:</strong> Dedicated staff available for
            booking services and handling queries.
          </li>
          <li>
            <strong>High-Speed Internet:</strong> Fiber optic internet available
            throughout the building.
          </li>
          <li>
            <strong>On-Site Maintenance:</strong> Round-the-clock maintenance
            services to address technical issues promptly.
          </li>
          <li>
            <strong>Parking:</strong> Underground parking with dedicated spots
            for residents and visitors.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Location Advantages</h3>
        <ul className="list-disc pl-5 text-white">
          <li>Walking distance to Cityville Central Mall.</li>
          <li>Proximity to Cityville International Airport (10 miles).</li>
          <li>Easy connectivity to highways and public transport.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">Community Spaces</h3>
        <ul className="list-disc pl-5 text-white">
          <li>Rooftop garden with a stunning city view.</li>
          <li>Lounge area for social gatherings and events.</li>
          <li>Children's play area and daycare services.</li>
        </ul>
      </div>
    </section>
      <p className="text-white mb-4">{buildingDetails.description}</p>

      <div className="location-section mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Location</h3>
        <p className="text-white">{buildingDetails.location}</p>
        <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509366!2d144.95373561531683!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4edab0b8968!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614768258947!5m2!1sen!2sus"
              width="100%"
              height="300"
              
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
      </div>

      <div className="amenities-section mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Amenities</h3>
        <ul className="list-disc pl-5 text-white">
          {buildingDetails.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      <div className="features-section">
        <h3 className="text-2xl font-semibold text-white mb-2">
          Building Features
        </h3>
        <ul className="text-white">
          <li>
            <strong>Total Floors:</strong> {buildingDetails.features.totalFloors}
          </li>
          <li>
            <strong>Total Units:</strong> {buildingDetails.features.totalUnits}
          </li>
          <li>
            <strong>Year Built:</strong> {buildingDetails.features.builtYear}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BuildingSection;
