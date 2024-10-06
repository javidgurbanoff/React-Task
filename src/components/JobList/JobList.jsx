import React from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

const JobList = () => {
  const jobs = [
    { id: 1, title: "Magento Developer", company: "Themesbrand", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 2, title: "Product Designer", company: "Web Technology pvt.ltd", location: "California", experience: "1-2 Years", position: 3, type: "Part Time", postedDate: "15 June 2021", lastDate: "28 June 2021", status: "New" },
    { id: 3, title: "Marketing Director", company: "Creative Agency", location: "Phoenix", experience: "-", position: 5, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Close" },
    { id: 4, title: "HTML Developer", company: "Web Technology pvt.ltd", location: "California", experience: "0-4 Years", position: 8, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 5, title: "Product Sales Specialist", company: "Skote Technology pvt.ltd", location: "Louisiana", experience: "5+ Years", position: 1, type: "Part Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "New" },
    { id: 6, title: "Magento Developer", company: "New Technology pvt.ltd", location: "Oakridge Lane Richardson", experience: "0-2 Years", position: 2, type: "Freelance", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "New" },
    { id: 7, title: "Business Associate", company: "Web Technology pvt.ltd", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
    { id: 8, title: "Magento Developer", company: "Adobe Agency", location: "California", experience: "0-2 Years", position: 2, type: "Full Time", postedDate: "02 June 2021", lastDate: "25 June 2021", status: "Active" },
  ];

  const getTypeClass = (type) => {
    switch (type) {
      case 'Full Time':
        return 'text-green-400';
      case 'Part Time':
        return 'text-red-400';
      case 'Freelance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-400';
      case 'New':
        return 'text-blue-400';
      case 'Close':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleView = (id) => {
    alert(`View job with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit job with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`R u sure to delete that item, Mate?`)) {
      alert(`Deleted job with ID: ${id}`);
    }
  };

  return (
    <div className="flex-1 bg-[#2a3042] text-white p-4">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-bold mb-4">Job Lists</h2>
        <button className="ml-auto p-2 bg-purple-700 rounded">Add New Job</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#2a3042]">
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
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="bg-[#2a3042] hover:bg-gray-700">
                <td className="p-2 border-t border-gray-700">{index + 1}</td>
                <td className="p-2 border-t border-gray-700">{job.title}</td>
                <td className="p-2 border-t border-gray-700">{job.company}</td>
                <td className="p-2 border-t border-gray-700">{job.location}</td>
                <td className="p-2 border-t border-gray-700">{job.experience}</td>
                <td className="p-2 border-t border-gray-700">{job.position}</td>
                <td className="p-2 border-t border-gray-700">
                  <span className={`font-semibold ${getTypeClass(job.type)}`}>
                    {job.type}
                  </span>
                </td>
                <td className="p-2 border-t border-gray-700">{job.postedDate}</td>
                <td className="p-2 border-t border-gray-700">{job.lastDate}</td>
                <td className="p-2 border-t border-gray-700">
                  <span className={`font-semibold ${getStatusClass(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                <td className="p-2 border-t border-gray-700 flex space-x-2">
                  <button
                    onClick={() => handleView(job.id)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleEdit(job.id)}
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
