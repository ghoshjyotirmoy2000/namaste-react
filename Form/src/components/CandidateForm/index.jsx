    import React, { useState, useEffect } from "react";
    import CandidateDetails from "./CandidateDetails";
    import CandidateExperience from "./CandidateExperience";
    import CandidateEducation from "./CandidateEducation";

    const CandidateForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [details, setDetails] = useState({});
    const [education, setEducation] = useState({});
    const [experience, setExperience] = useState({});
    const [formData, setFormData] = useState({
        details: {},
        education: {},
        experience: {}
    });

    // Keep formData in sync with individual states
    useEffect(() => {
        setFormData({ details, education, experience });
    }, [details, education, experience]);

    const renderStep = () => {
        switch (currentStep) {
        case 0:
            return <CandidateDetails data={details} setData={setDetails} />;
        case 1:
            return <CandidateExperience data={experience} setData={setExperience} />;
        case 2:
            return <CandidateEducation data={education} setData={setEducation} />;
        default:
            return null;
        }
    };

    const handleSubmit = () => {
        console.log("Submitted data:", formData);
        alert("Form submitted!");

        // Optionally reset form
        setDetails({});
        setEducation({});
        setExperience({});
        setCurrentStep(0);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
            <div className="form-container">{renderStep()}</div>

            <div className="flex justify-between items-center gap-4">
            <button
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
                onClick={() =>
                currentStep < 2
                    ? setCurrentStep((prev) => prev + 1)
                    : handleSubmit()
                }
                className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
                currentStep < 2
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
            >
                {currentStep < 2 ? "Next" : "Submit"}
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default CandidateForm;
