import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import BankInformation from "../components/forms/BankInformation";
import FacilitiesStepper from "../components/forms/FacilitiesStepper";
import PersonalInfoStepper from "../components/forms/PersonalInfoStepper";
import StepperCustom from "../components/forms/Stepper";
import { UserData } from "../types/UserTypes";
import { saveUserData } from "../utils/saveUserToIndexDB";

const Loan = () => {
  const navigate = useNavigate();

  const steps = [
    { id: '1', title: 'اطلاعات شخصی', component: <PersonalInfoStepper /> },
    { id: '2', title: 'اطلاعات بانکی', component: <BankInformation /> },
    { id: '3', title: 'تسهیلات', component: <FacilitiesStepper /> },
  ];

  const formProps = useForm<UserData>({
    mode: "onChange"
  });

  const { trigger, handleSubmit } = formProps;

  const submit = async (data: UserData) => {
    const isStepValid = await trigger();
    if (isStepValid) {
      saveUserData(data)
      navigate("../home")
    }
  };

  return (
    <Fragment>
      <FormProvider  {...formProps}>
        <StepperCustom steps={steps} sendRequest={handleSubmit(submit)} />
      </FormProvider>
    </Fragment>
  )
}

export default Loan;
