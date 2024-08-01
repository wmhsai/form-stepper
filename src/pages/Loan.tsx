import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import BankInformation from "../components/forms/BankInformation";
import FacilitiesStepper from "../components/forms/FacilitiesStepper";
import PersonalInfoStepper from "../components/forms/PersonalInfoStepper";
import StepperCustom from "../components/forms/Stepper";
import { UserData } from "../types/UserTypes";
import { convertDateEn } from "../utils/convert";
import { saveUserData } from "../utils/saveUserToIndexDB";

const Loan = () => {
  const navigate = useNavigate();
  const formProps = useForm<UserData>({
    mode: "onChange"
  });
  const { trigger, handleSubmit, setValue } = formProps;

  const submit = async (data: UserData) => {
    data.BirthDate = convertDateEn(data.BirthDate) ?? ''
    const isStepValid = await trigger();
    if (isStepValid) {
      saveUserData(data)
      navigate("../home")
    }
  };

  const [selectedFacilitiesOption, setSelectedFacilitiesOption] = useState({ name: "", value: 0 });
  const [isDisabledPaidPeriod, setIsDisabledPaidPeriod] = useState(true);
  const [showFinalData, setShowFinalData] = useState(false);
  const [selectedPaidPeriodOption, setSelectedPaidPeriodOption] = useState({ name: "", value: 0 });

  const handleChangeFacilities = useCallback((newValue: string) => {
    const parsedValue = parseInt(newValue, 10);
    setSelectedFacilitiesOption({ name: "", value: isNaN(parsedValue) ? 0 : parsedValue });
    setShowFinalData(false);
    if (parsedValue) {
      setIsDisabledPaidPeriod(false);
    } else {
      setIsDisabledPaidPeriod(true);
      setValue("PaidPeriod", "");
    }
  }, [setValue]);

  const handleChangePaidPeriod = useCallback(async (newValue: string) => {
    const parsedValue = parseInt(newValue, 10);
    setSelectedPaidPeriodOption({ name: "", value: isNaN(parsedValue) ? 0 : parsedValue });
    setShowFinalData(parsedValue ? true : false);
  }, []);

  const steps = [
    {
      id: '1',
      title: 'اطلاعات شخصی',
      component: <PersonalInfoStepper />
    },
    {
      id: '2',
      title: 'اطلاعات بانکی',
      component: <BankInformation />
    },
    {
      id: '3',
      title: 'تسهیلات',
      component: <FacilitiesStepper
        selectedFacilitiesOption={selectedFacilitiesOption}
        selectedPaidPeriodOption={selectedPaidPeriodOption}
        handleChangeFacilities={handleChangeFacilities}
        handleChangePaidPeriod={handleChangePaidPeriod}
        isDisabledPaidPeriod={isDisabledPaidPeriod}
        showFinalData={showFinalData}
      />
    },
  ];

  return (
    <Fragment>
      <FormProvider  {...formProps}>
        <StepperCustom steps={steps} sendRequest={handleSubmit(submit)} />
      </FormProvider>
    </Fragment>
  )
}

export default Loan;
