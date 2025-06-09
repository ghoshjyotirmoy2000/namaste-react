import React from 'react';

const CandidateExperience = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience Details</h2>

      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          type="text"
          name="company"
          value={data.company || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Infosys"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Role / Position</label>
        <input
          type="text"
          name="role"
          value={data.role || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Frontend Developer"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Years of Experience</label>
        <input
          type="number"
          name="years"
          value={data.years || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., 2"
        />
      </div>
    </div>
  );
};

export default CandidateExperience;
