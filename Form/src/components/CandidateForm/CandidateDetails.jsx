import React from 'react';

const CandidateDetails = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Candidate Details</h2>

      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={data.fullName || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter full name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={data.email || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={data.phone || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );
};

export default CandidateDetails;