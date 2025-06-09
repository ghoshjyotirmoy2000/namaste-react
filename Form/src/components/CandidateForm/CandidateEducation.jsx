import React from 'react';

const CandidateEducation = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education Details</h2>

      <div>
        <label className="block mb-1 font-medium">Degree</label>
        <input
          type="text"
          name="degree"
          value={data.degree || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., B.Tech, BCA, M.Sc"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">University</label>
        <input
          type="text"
          name="university"
          value={data.university || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Delhi University"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Graduation Year</label>
        <input
          type="number"
          name="graduationYear"
          value={data.graduationYear || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., 2025"
        />
      </div>
    </div>
  );
};

export default CandidateEducation;
