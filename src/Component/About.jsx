import React from "react";

const BuildingSection = () => {
  const buildingDetails = {
    name: "Sunrise Tower",
    location: "123 Main Street, Cityville",
    description:
      "Sunrise Tower is a state-of-the-art building featuring modern architecture and advanced building management systems. It is designed to provide comfort, safety, and sustainability for residents and businesses.",
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
    <section className="building-section p-6 rounded-lg shadow-lg pt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        About {buildingDetails.name}
      </h2>

      <section className="building-section p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Sunrise Tower</h2>
      <p className="text-gray-700 mb-6">
        Sunrise Tower is a modern architectural marvel located in the heart of
        Cityville. Designed with cutting-edge technology and sustainability in
        mind, it provides a perfect blend of luxury, convenience, and
        eco-friendly living. The building caters to both residential and
        commercial needs, ensuring a comfortable and secure environment for all
        its occupants.
      </p>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Highlights</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <strong>Prime Location:</strong> Situated in the bustling downtown
            area, Sunrise Tower offers easy access to shopping centers,
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
            pool to coworking spaces and a conference room, Sunrise Tower is
            designed to meet diverse needs.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Building Specifications</h3>
        <ul className="list-disc pl-5 text-gray-700">
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Additional Services</h3>
        <ul className="list-disc pl-5 text-gray-700">
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Location Advantages</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Walking distance to Cityville Central Mall.</li>
          <li>Proximity to Cityville International Airport (10 miles).</li>
          <li>Easy connectivity to highways and public transport.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Community Spaces</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Rooftop garden with a stunning city view.</li>
          <li>Lounge area for social gatherings and events.</li>
          <li>Children's play area and daycare services.</li>
        </ul>
      </div>
    </section>
      <p className="text-gray-700 mb-4">{buildingDetails.description}</p>

      <div className="location-section mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Location</h3>
        <p className="text-gray-700">{buildingDetails.location}</p>
        <div className="map-placeholder mt-4 bg-gray-300 w-full h-60 flex items-center justify-center text-gray-600">
          Map Placeholder (Embed Map API Here)
        </div>
      </div>

      <div className="amenities-section mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Amenities</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {buildingDetails.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      <div className="features-section">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Building Features
        </h3>
        <ul className="text-gray-700">
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
