import React from 'react';

const JobList = () => {
  const jobs = [
    { id: 1, title: "Magento Developer", company: "Themesbrand", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 2, title: "Product Designer", company: "Web Technology pvt.ltd", location: "California", experience: "1-2 Years", position: 3, type: "Part Time", postedDate: "15 June 2021", lastDate: "28 June 2021", status: "New" },
    { id: 3, title: "Marketing Director", company: "Creative Agency", location: "Phoenix", experience: "-", position: 5, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Close" },
    { id: 4, title: "HTML Developer", company: "Web Technology pvt.ltd", location: "California", experience: "0-4 Years", position: 8, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 5, title: "Product Sales Specialist", company: "Skote Technology pvt.ltd", location: "Louisiana", experience: "5+ Years", position: 1, type: "Part Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "New" },
    { id: 6, title: "Magento Developer", company: "New Technology pvt.ltd", location: "Oakridge Lane Richardson", experience: "0-2 Years", position: 2, type: "Freelance", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "New" },
    { id: 7, title: "Business Associate", company: "Web Technology pvt.ltd", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 7, title: "Magento Developer", company: "Adobe Agency	", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
  ];

  return (
    <div className="flex-1 bg-gray-800 text-white p-4 ">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-bold mb-4 ">Job Lists</h2>
        <button className="ml-auto p-2 bg-purple-700 rounded">Add New Job</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2">No</th>
              <th className="p-2">Job Title</th>
              <th className="p-2">Company Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Experience</th>
              <th className="p-2">Position</th>
              <th className="p-2">Type</th>
              <th className="p-2">Posted Date</th>
              <th className="p-2">Last Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="bg-gray-800 hover:bg-gray-700">
                <td className="p-2 border-t border-gray-700">{index + 1}</td>
                <td className="p-2 border-t border-gray-700">{job.title}</td>
                <td className="p-2 border-t border-gray-700">{job.company}</td>
                <td className="p-2 border-t border-gray-700">{job.location}</td>
                <td className="p-2 border-t border-gray-700">{job.experience}</td>
                <td className="p-2 border-t border-gray-700">{job.position}</td>
                <td className="p-2 border-t border-gray-700">{job.type}</td>
                <td className="p-2 border-t border-gray-700">{job.postedDate}</td>
                <td className="p-2 border-t border-gray-700">{job.lastDate}</td>
                <td className="p-2 border-t border-gray-700">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
