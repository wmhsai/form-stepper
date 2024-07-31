interface RepaymentType {
  name: string;
  value: number;
}

export interface Loan {
  id: string;
  createdDate: string;
  name: string;
  repaymentType: RepaymentType[];
  amount: number;
  percentageRate?: number;
  penaltyRate: number;
  interestRate?: number;
}
export interface Facility {
  name: string;
  value: string | number;
  id: number
}