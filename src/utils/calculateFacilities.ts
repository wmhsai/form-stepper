export function calculateFacilities(
    amount: number,
    interestRate: number,
    selectedPaidPeriodOption: { value: number }
): number {
    return Math.round((amount + (amount * interestRate / 100)) / selectedPaidPeriodOption.value);
}


export function calculateBankLoanInterest(
    amount: number,
    interestRate: number,
    numberOfInstallments: number
): number {
    return Math.round(amount * interestRate * (numberOfInstallments + 1) / 2400);
}

export function calculateMonthlyInstallmentAmount(
    totalAmount: number,
    bankLoanInterest: number,
    numberOfInstallments: number
): number {
    return Math.round((totalAmount + bankLoanInterest) / numberOfInstallments);
}

export function calculateAmountLate(amount: number, rate: number): number {
    return Math.round(amount * (rate / 100));
}