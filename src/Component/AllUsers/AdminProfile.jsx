import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Hooks/UseManu/UseAuth";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminProfile = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();

  // Apartments data
  const { data: apartment = [] } = useQuery({
    queryKey: ["totalapartment"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment`);
      return res.data;
    },
  });

  // Users data
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/alluserdata`);
      return res.data;
    },
  });

  // Members data
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/alluserdata/member`);
      return res.data;
    },
  });

  // Bookings data
  const { data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/booking`);
      return res.data;
    },
  });

  // Total Rent Calculation
  const totalRent = booking.reduce((sum, book) => sum + book.rent, 0);

  // Bar Chart Data for Counts
  const barChartDataCounts = {
    labels: ["Apartments", "Users", "Members", "Bookings"],
    datasets: [
      {
        label: "Count",
        data: [apartment.length, users.length, members.length, booking.length],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#e91e63"],
        borderColor: ["#388e3c", "#1976d2", "#f57c00", "#d32f2f"],
        borderWidth: 1,
      },
    ],
  };

  // Bar Chart Data for Rent
  const barChartDataRent = {
    labels: ["Total Rent ($)"],
    datasets: [
      {
        label: "Rent",
        data: [totalRent],
        backgroundColor: ["#9c27b0"],
        borderColor: ["#7b1fa2"],
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ["Apartments", "Users", "Members", "Bookings"],
    datasets: [
      {
        data: [apartment.length, users.length, members.length, booking.length],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#e91e63"],
        hoverOffset: 10,
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-5 text-white">
      <div className="flex justify-center items-center flex-col">
        <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5">
          Admin : {user.displayName}
        </p>
        <img className="rounded-full w-24 h-24" src={user.photoURL} alt="Admin" />
      </div>

      <div className="text-center">
        <h2>{user.email}</h2>
      </div>

      <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="border-b-2 rounded-lg px-2 pb-1">
          <p>Total Apartments: {apartment.length}</p>
        </div>
        <div className="border-b-2 rounded-lg px-2 pb-1">
          <p>Total Users: {users.length}</p>
        </div>
        <div className="border-b-2 rounded-lg px-2 pb-1">
          <p>Total Members: {members.length}</p>
        </div>
        <div className="border-b-2 rounded-lg px-2 pb-1">
          <p>Total Bookings: {booking.length}</p>
        </div>
        <div className="border-b-2 rounded-lg px-2 pb-1">
          <p>Total Rent: ${totalRent}</p>
        </div>
      </div>

      {/* Bar Chart for Counts */}
      <div className="my-5 mx-auto w-full max-w-sm md:max-w-lg lg:max-w-2xl">
        <h3 className="text-center mb-4">Entity Counts</h3>
        <Bar data={barChartDataCounts} options={chartOptions} />
      </div>

      {/* Pie Chart */}
      <div className="my-5 mx-auto w-full max-w-sm md:max-w-lg lg:max-w-2xl">
        <h3 className="text-center mb-4">Distribution of Entities</h3>
        <Pie data={pieChartData} options={chartOptions} />
      </div>


      
      {/* Bar Chart for Rent */}
      <div className="my-5 mx-auto w-full max-w-sm md:max-w-lg lg:max-w-2xl">
        <h3 className="text-center mb-4">Total Rent</h3>
        <Bar data={barChartDataRent} options={chartOptions} />
      </div>

    </div>
  );
};

export default AdminProfile;
