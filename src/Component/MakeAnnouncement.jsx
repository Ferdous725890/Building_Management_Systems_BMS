import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import useAxiosPublic from "../Hooks/useAxiosPublic";

const MakeAnnouncement = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcements = {
      title,
      description,
    };

    try {
      const res = await axiosPublic.post("/admin/announcements", announcements);
      if (res.data) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Announcement created successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset(); // Reset the form
      }
    } catch (error) {
      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to create announcement.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-center items-center ">
        <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5 text-white">
          Announcement
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-[4px]">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 text-white rounded-md bg-slate-900 focus:outline focus:outline-blue-300"
            placeholder="Enter announcement title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            className="w-full focus:outline text-white focus:outline-blue-300 min-h-[200px] px-3 py-2 rounded-md bg-slate-900"
            placeholder="Enter announcement description"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
