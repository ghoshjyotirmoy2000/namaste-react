// CandidateEducation.jsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CandidateEducation = ({ formik }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education Details</h2>

      <div>
        <label className="block mb-1 font-medium">Degree</label>
        <Field
          type="text"
          name="education.degree"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., B.Tech, BCA, M.Sc"
        />
        <ErrorMessage name="education.degree" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">University</label>
        <Field
          type="text"
          name="education.university"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., Delhi University"
        />
        <ErrorMessage name="education.university" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Graduation Year</label>
        <Field
          type="number"
          name="education.graduationYear"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="e.g., 2025"
        />
        <ErrorMessage name="education.graduationYear" component="div" className="text-red-500 mt-1 text-sm" />
      </div>
    </div>
  );
};

export default CandidateEducation;