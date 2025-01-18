import React, { useState } from "react";
import axios from "axios";
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
    const res = await axiosPublic.post("/admin/announcements", announcements);
    console.log(res.data);
  };

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Make Announcement Fresous</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border px-3 py-2"
            placeholder="Enter announcement title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border px-3 py-2"
            placeholder="Enter announcement description"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
