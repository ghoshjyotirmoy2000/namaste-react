import React from "react";
// import CandidateForm from "./components/CandidateForm";
import CandidateForm from "./components/FormikForm";
import MultiStepFormDialog from "./components/MultiStepFormDialog";
import NewForm from "./components/NewForm";
import NewFormikForm from "./components/NewFormikForm";

const App = () => {
  return (
    <div>
     {/* <CandidateForm/> */}
     <NewForm/>
     <NewFormikForm/>
    </div>
  );
};

export default App;
