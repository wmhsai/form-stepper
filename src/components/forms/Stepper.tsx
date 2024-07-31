import { useState } from 'react';
import { Step, Stepper } from "react-form-stepper";
import { useFormContext } from 'react-hook-form';
import { StepType } from '../../types/stepperTypes';

function StepperCustom({ steps, sendRequest }: { steps: StepType[], sendRequest: () => void }) {
    const [activeStep, setActiveStep] = useState(0);
    const { trigger } = useFormContext();
    const nextStep = async () => {
        const isStepValid = await trigger();
        if (isStepValid) {
            setActiveStep(activeStep + 1);
        }
    }
    return (
        <div>
            <Stepper activeStep={activeStep} dir='ltr'>
                {steps.map((step) => (
                    <Step key={step.id} label={step.title} />
                ))}
            </Stepper>
            <div style={{ padding: '20px' }}>
                <div style={{ minHeight: "20rem" }}>
                    {steps[activeStep].component}
                </div>
                <div style={{ ...styles.ButtonWrapper as React.CSSProperties }}>
                    {activeStep < steps.length - 1 ? (
                        <button onClick={nextStep}>بعدی</button>
                    ) : (
                        <button onClick={sendRequest}>ارسال</button>
                    )}
                    <button onClick={() => setActiveStep(activeStep - 1)} disabled={activeStep === 0}>قبلی</button>
                </div>
            </div>
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
