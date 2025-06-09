// CandidateDetails.jsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CandidateDetails = ({ formik }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Candidate Details</h2>

      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <Field
          type="text"
          name="details.fullName"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter full name"
        />
        <ErrorMessage name="details.fullName" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <Field
          type="email"
          name="details.email"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter email"
        />
        <ErrorMessage name="details.email" component="div" className="text-red-500 mt-1 text-sm" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <Field
          type="tel"
          name="details.phone"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter phone number"
        />
        <ErrorMessage name="details.phone" component="div" className="text-red-500 mt-1 text-sm" />
      </div>
    </div>
  );
};

export default CandidateDetails;