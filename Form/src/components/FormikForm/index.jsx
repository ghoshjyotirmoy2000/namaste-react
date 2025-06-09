// index.jsx
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CandidateDetails from "./CandidateDetails";
import CandidateExperience from "./CandidateExperience";
import CandidateEducation from "./CandidateEducation";

const CandidateForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Define validation schemas for each step
  const validationSchemas = [
    // Candidate Details Schema
    Yup.object({
      details: Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().required("Phone number is required")
      })
    }),
    // Experience Schema
    Yup.object({
      experience: Yup.object({
        company: Yup.string().required("Company name is required"),
        role: Yup.string().required("Role is required"),
        years: Yup.number().required("Years of experience is required").positive("Must be a positive number")
      })
    }),
    // Education Schema
    Yup.object({
      education: Yup.object({
        degree: Yup.string().required("Degree is required"),
        university: Yup.string().required("University is required"),
        graduationYear: Yup.number().required("Graduation year is required").positive("Must be a positive number")
      })
    })
  ];

  const initialValues = {
    details: {},
    education: {},
    experience: {}
  };

  const renderStep = (formik) => {
    switch (currentStep) {
      case 0:
        return <CandidateDetails formik={formik} />;
      case 1:
        return <CandidateExperience formik={formik} />;
      case 2:
        return <CandidateEducation formik={formik} />;
      default:
        return null;
    }
  };

  const handleSubmit = (values) => {
    console.log("Submitted data:", values);
    alert("Form submitted!");
    // Reset form and step
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[currentStep]}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="space-y-6">
              <div className="form-container">{renderStep(formik)}</div>

              <div className="flex justify-between items-center gap-4">

                <button
                  type="button"
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
                    currentStep === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={() => {
                    formik.validateForm().then((errors) => {
                      const currentStepErrors = 
                        currentStep === 0 ? errors.details :
                        currentStep === 1 ? errors.experience :
                        errors.education;

                      if (!currentStepErrors || Object.keys(currentStepErrors).length === 0) {
                        if (currentStep < 2) {
                          setCurrentStep((prev) => prev + 1);
                        } else {
                          formik.handleSubmit();
                        }
                      } else {
                        formik.setTouched(
                          currentStep === 0 
                            ? { details: { fullName: true, email: true, phone: true } }
                            : currentStep === 1
                            ? { experience: { company: true, role: true, years: true } }
                            : { education: { degree: true, university: true, graduationYear: true } },
                          true
                        );
                      }
                    });
                  }}
                  className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
                    currentStep < 2
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {currentStep < 2 ? "Next" : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CandidateForm;