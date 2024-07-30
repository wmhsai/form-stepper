import { useState } from 'react';
import { Step, Stepper } from "react-form-stepper";
import { FormProvider, useForm } from 'react-hook-form';
import { StepperType, StepType } from '../../types/stepperTypes';


function StepperCustom({ steps }: { steps: StepType[] }) {
    const [activeStep, setActiveStep] = useState(0);

    const formProps = useForm<StepperType>({
        mode: "onChange"
    });
    const { trigger } = formProps;

    const nextStep = async () => {
        const isStepValid = await trigger();
        if (isStepValid) {
            setActiveStep(activeStep + 1);
        }
    }
    console.log(activeStep,);

    return (
        <div>
            <FormProvider  {...formProps}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step key={step.id} label={step.title} />
                    ))}
                </Stepper>
                <div style={{ padding: '20px' }}>
                    <div style={{ minHeight: "20rem" }}>
                        {steps[activeStep].component}
                    </div>
                    <div style={{ ...styles.ButtonWrapper as React.CSSProperties }}>
                        <button onClick={() => setActiveStep(activeStep - 1)} disabled={activeStep === 0}>Previous</button>
                        {activeStep < steps.length - 1 ? (
                            <button onClick={nextStep}>Next</button>
                        ) : (
                            <button onClick={() => setActiveStep(steps.length - 1)}>End</button>
                        )}
                    </div>
                </div>

            </FormProvider>
        </div>
    );
}

export default StepperCustom;

const styles = {
    ButtonWrapper: {
        display: "flex",
        justifyContent: "space-around",
        gap: "2rem",
        paddingTop: "2rem"
    },
}
