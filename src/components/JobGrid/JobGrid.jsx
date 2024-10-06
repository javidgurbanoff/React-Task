import React from "react";

const JobGrid = () => {
  // Example job data (replace this with actual data fetching logic)
  const jobs = [
    {
      id: 1,
      title: "Magento Developer",
      company: "Themesbrand",
      location: "California",
      experience: "0-2 Years",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Web Technology Pvt. Ltd.",
      location: "California",
      experience: "1-2 Years",
    },
    {
      id: 3,
      title: "Marketing Director",
      company: "Creative Agency",
      location: "Phoenix",
      experience: "-",
    },
    // Add more job data as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Grid View</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="mb-1">
              <strong>Company:</strong> {job.company}
            </p>
            <p className="mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Experience:</strong> {job.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobGrid;
