import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Hooks/UseManu/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Apartment = () => {
  const { user } = UseAuth();
  const usenavigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  // Fetch data using React Query
  const {
    data: apartments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartment");
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-20 text-red-500">Failed to load data</div>
    );
  }

  const handleAgreement = async (apartment) => {
    if (user?.email) {
      const agreementInformation = {
        userName: user?.displayName,
        email: user?.email,
        floor_no: apartment.floor_no,
        block_name: apartment.block_name,
        apartment_no: apartment.apartment_no,
        rent: apartment.rent,
        status: "pending",
      };
      const res = await axiosPublic.post(
        `/apartment/booking`,
        agreementInformation
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Agreement Success",
          html: `Thank you, ${user?.displayName}`,
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => Swal.showLoading(),
        });
      }
    } else {
      usenavigate("/login");
    }
  };

  const filteredApartments = apartments.filter((apartment) => {
    const rent = parseFloat(apartment.rent);
    const min = parseFloat(minRent) || 0;
    const max = parseFloat(maxRent) || Infinity;
    return rent >= min && rent <= max;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApartments = filteredApartments.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>BMS || Apartment</title>
      </Helmet>

      <div className="min-h-screen p-4 pt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Apartment</h2>

        {/* Search functionality */}
        <div className="mb-6 flex gap-4">
          <input
            type="number"
            placeholder="Min Rent"
            value={minRent}
            onChange={(e) => setMinRent(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Max Rent"
            value={maxRent}
            onChange={(e) => setMaxRent(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={() => setCurrentPage(1)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedApartments.map((apartment) => (
            <div key={apartment._id} className="border  rounded shadow">
              <img
                src={apartment.apartment_image}
                alt={`Apartment ${apartment.apartment_no}`}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Block: {apartment.block_name}
                </h3>
                <p>Floor No: {apartment.floor_no}</p>
                <p>Apartment No: {apartment.apartment_no}</p>
                <p className="text-green-600 font-bold">
                  Rent: ${apartment.rent}
                </p>
                <p className="text-green-600 font-bold">
                  Rent: ${apartment.rent}
                </p>
                <button
                  onClick={() => handleAgreement(apartment)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Agreement
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Apartment;
