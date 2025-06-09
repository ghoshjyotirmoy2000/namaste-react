import React from 'react';

const PersonalDetailsForm = ({ personalDetails, onPersonalDetailsChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={personalDetails.name || ''}
          onChange={(e) => onPersonalDetailsChange({ ...personalDetails, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={personalDetails.email || ''}
          onChange={(e) => onPersonalDetailsChange({ ...personalDetails, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={personalDetails.phone || ''}
          onChange={(e) => onPersonalDetailsChange({ ...personalDetails, phone: e.target.value })}
        />
      </div>
    </div>
  );
};

export default PersonalDetailsForm;