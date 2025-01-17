import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Hooks/UseManu/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Apartment = () => {
  const { user } = UseAuth();
  const usenavigate = useNavigate()
  const axiosPublic = useAxiosPublic();

  // Fetch data using React Query (v5 syntax)
  const {
    data: apartments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartment");
      return res.data; // Assuming res.data contains the apartment data
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

  const handelAgrement = async (apartment) => {
    if(user?.email){
      const agrementinformtion = {
        userName: user?.displayName,
        useremail: user?.email,
        floor_no: apartment.floor_no,
        block_name: apartment.block_name,
        apartment_no: apartment.apartment_no,
        rent: apartment.rent,
        status: "pending",
      };
      const res = await axiosPublic.post(
        `/apartment/booking`,
        agrementinformtion
      );
      console.log(res.data);
      if (res.data.insertedId) {
        let timerInterval;
        Swal.fire({
          title: "Agreement ",
          html: `${user?.displayName} <b></b>`,
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    }else{
      return usenavigate('/login')
    }
    
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-20 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Apartment List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <div key={apartment._id} className="bg-white p-4 rounded shadow">
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
              {
                user?.email? <><button
                onClick={() => handelAgrement(apartment)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Agreement
              </button></> :<>
              <><button
                onClick={() => handelAgrement(apartment)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Agreement
              </button></>
              </>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
