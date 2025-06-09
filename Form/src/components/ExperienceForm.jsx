import React from 'react';

const ExperienceForm = ({ experience, onExperienceChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={experience.company || ''}
          onChange={(e) => onExperienceChange({ ...experience, company: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={experience.position || ''}
          onChange={(e) => onExperienceChange({ ...experience, position: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="duration">Duration (years)</label>
        <input
          id="duration"
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={experience.duration || ''}
          onChange={(e) => onExperienceChange({ ...experience, duration: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ExperienceForm;