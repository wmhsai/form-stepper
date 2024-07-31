import { FormProvider, useForm } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { showAlert } from "../components/alerts";
import BankInformation from "../components/forms/BankInformation";
import FacilitiesStepper from "../components/forms/FacilitiesStepper";
import PersonalInfoStepper from "../components/forms/PersonalInfoStepper";
import StepperCustom from "../components/forms/Stepper";
import { StepperType } from "../types/stepperTypes";
import { ALERT_TYPES } from "../utils/enums";
import { useNavigate } from "react-router-dom";

const Loan = () => {
  const navigate =useNavigate()
  const steps = [
    { id: '1', title: 'اطلاعات شخصی', component: <PersonalInfoStepper /> },
    { id: '2', title: 'اطلاعات بانکی', component: <BankInformation /> },
    { id: '3', title: 'تسهیلات', component: <FacilitiesStepper /> },
  ];

  const formProps = useForm<StepperType>({
    mode: "onChange"
  });
  const { getValues, trigger } = formProps;

  const sendRequest = async () => {
   const isStepValid = await trigger();
    if (isStepValid) {

      const openRequest = indexedDB.open("myDatabase", 1);
      openRequest.onupgradeneeded = function (e) {
        if (e.target) {
          const dbRequest = e.target as IDBOpenDBRequest;
          const db = dbRequest.result;
          if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users');
          }
        }
      };
      const finalValue = getValues()
      openRequest.onsuccess = function (e) {
        if (e.target instanceof IDBOpenDBRequest) {
          const db = e.target.result;
          const tx = db.transaction(["users"], "readwrite");
          const store = tx.objectStore("users");
          store.put(finalValue, 'mine');
          showAlert("!درخواست شما با موفقیت ثبت شد", ALERT_TYPES.SUCCESS);
          navigate("../home")
        }
      };
      openRequest.onerror = function (e) {
        const dbRequest = e.target as IDBOpenDBRequest;
        if (dbRequest) {
          console.error("Error", dbRequest.error);
        }
      };
    }
  }

  return (
    <Fragment>
      <FormProvider  {...formProps}>
        <StepperCustom steps={steps} sendRequest={sendRequest} />
      </FormProvider>
    </Fragment>
  )
}

export default Loan
