import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import ExperienceForm from './ExperienceForm';

const MultiStepFormDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({});
  const [experience, setExperience] = useState({});
  const [formData, setFormData] = useState(null);

  const openDialog = () => {
    setIsOpen(true);
    setCurrentStep(1);
    setPersonalDetails({});
    setExperience({});
    setFormData(null);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = () => {
    const data = {
      personalDetails: personalDetails,
      experience: experience
    };
    setFormData(data);
    console.log('Form submitted:', data);
    closeDialog();
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <button 
        onClick={openDialog}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Open Form
      </button>

      {formData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">Submitted Data:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-4">
              {currentStep === 1 ? (
                <PersonalDetailsForm 
                  personalDetails={personalDetails} 
                  onPersonalDetailsChange={setPersonalDetails}
                />
              ) : (
                <ExperienceForm 
                  experience={experience} 
                  onExperienceChange={setExperience}
                />
              )}
            </div>
            
            <div className="bg-gray-100 p-4 flex justify-between rounded-b-lg">
              {currentStep === 1 ? (
                <>
                  <button 
                    onClick={closeDialog}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Save & Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepFormDialog;