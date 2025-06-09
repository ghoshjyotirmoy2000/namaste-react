// CandidateExperience.jsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CandidateExperience = ({ formik }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience Details</h2>

      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <Field
          type="text"
          name="experience.company"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Infosys"
        />
        <ErrorMessage name="experience.company" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Role / Position</label>
        <Field
          type="text"
          name="experience.role"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Frontend Developer"
        />
        <ErrorMessage name="experience.role" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Years of Experience</label>
        <Field
          type="number"
          name="experience.years"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., 2"
        />
        <ErrorMessage name="experience.years" component="div" className="text-red-500 mt-1 text-sm" />
      </div>
    </div>
  );
};

export default CandidateExperience;