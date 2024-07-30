
export interface StepperType {
    facilities?: string;
    personalInformation?: string;
    bankInformation?: string;
    finalStep?: string;
}

export interface StepType {
    id: string;
    title: string;
    component: JSX.Element;
}