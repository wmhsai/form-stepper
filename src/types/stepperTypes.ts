
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

interface Facility {
    name: string;
    value: number;
}
export interface FacilitiesStepperProps {
    selectedFacilitiesOption: Facility;
    selectedPaidPeriodOption: Facility;
    handleChangeFacilities: (value: string) => void;
    handleChangePaidPeriod: (value: string) => void;
    isDisabledPaidPeriod: boolean;
    showFinalData: boolean;
}