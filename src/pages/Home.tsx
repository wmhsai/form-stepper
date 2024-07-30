import { Fragment } from "react/jsx-runtime";
import FacilitiesStepper from "../components/forms/FacilitiesStepper";
import FinalStepper from "../components/forms/FinalStepper";
import PersonalInfoStepper from "../components/forms/PersonalInfoStepper";
import StepperCustom from "../components/forms/Stepper";
import ThirdStepper from "../components/forms/ThirdStepper";

const Home = () => {
  const steps = [
    { id: '1', title: 'Personal Information', component: <PersonalInfoStepper /> },
    { id: '2', title: 'Facilities', component: <FacilitiesStepper /> },
    { id: '3', title: 'Bank information', component: <ThirdStepper /> },
    { id: '4', title: 'Done', component: <FinalStepper /> },
  ];
  return (
    <Fragment>
      <StepperCustom steps={steps} />
    </Fragment>
  )
}

export default Home
