import React, { Fragment, useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { styles } from '.';
import { UseGetAllBlu } from '../../hooks/UseBlu';
import { Facility, Loan } from '../../types/LoanTypes';
import { calculateAmountLate, calculateBankLoanInterest, calculateFacilities, calculateMonthlyInstallmentAmount } from '../../utils/calculateFacilities';
import { formatWithCommas } from '../../utils/convert';
import ComboInput from '../inputs/ComboInput';

const FacilitiesStepper = () => {
    const { data } = UseGetAllBlu()
    const { control, getValues, setValue } = useFormContext();
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
            setValue("PaidPeriod", null);
        }
    }, [setValue]);

    const handleChangePaidPeriod = useCallback(async (newValue: string) => {
        const parsedValue = parseInt(newValue, 10);
        setSelectedPaidPeriodOption({ name: "", value: isNaN(parsedValue) ? 0 : parsedValue });
        setShowFinalData(parsedValue ? true : false);
    }, []);

    const allFacilitiesNames = [...new Set(data?.map((item: Facility) => ({
        name: item.name,
        value: Number(item.id)
    })) as Facility[])]
        .map(({ name, value }) => ({ name, value }));

    const FilterFaciliti = data?.filter((entry: Loan) => entry.id === String(selectedFacilitiesOption.value));

    const allPaidPeriodNames = FilterFaciliti?.flatMap((entry: Loan) => entry.repaymentType.map(repayment => ({
        name: repayment.name,
        value: repayment.value
    })))
    const amount = FilterFaciliti?.[0]?.amount ?? 0;
    const Rate = FilterFaciliti?.[0]?.penaltyRate ?? 0;
    const interestRate = Math.round((FilterFaciliti?.[0]?.interestRate)) ?? 0;

    const facilities = calculateFacilities(amount, interestRate, selectedPaidPeriodOption);
    const NumberOfInstallments = selectedPaidPeriodOption.value;
    const BankLoanInterest = calculateBankLoanInterest(amount, interestRate, NumberOfInstallments);
    const MonthlyInstallmentAmount = calculateMonthlyInstallmentAmount(amount + BankLoanInterest, BankLoanInterest, NumberOfInstallments);
    const AmountLate = calculateAmountLate(amount, Rate);

    const result = [
        { title: "قسط تسهیلات(ریال):", value: formatWithCommas(facilities) },
        { title: "مبلغ:", value: FilterFaciliti && formatWithCommas(FilterFaciliti[0]?.amount) },
        { title: "تعداد اقساط:", value: NumberOfInstallments },
        { title: "مبلغ قسط ماهیانه:", value: formatWithCommas(MonthlyInstallmentAmount) },
        { title: "درصد سود سالیانه:", value: formatWithCommas(MonthlyInstallmentAmount * 12) },
        { title: "مبلغ جریمه دیرکرد:", value: formatWithCommas(AmountLate) },

    ]

    return (
        <Fragment>
            <div style={{ ...styles.FormWrapper as React.CSSProperties }}>
                <ComboInput
                    control={control}
                    options={allFacilitiesNames as { value: number; name: string; }[]}
                    selectedOption={getValues().facilities ?? selectedFacilitiesOption.name}
                    onChange={handleChangeFacilities}
                    name='facilities'
                    label='انتخاب تسهیلات'
                    required
                />
                <ComboInput
                    control={control}
                    options={allPaidPeriodNames as { value: number; name: string; }[]}
                    disabled={isDisabledPaidPeriod}
                    selectedOption={getValues().PaidPeriod ?? selectedPaidPeriodOption.name}
                    onChange={handleChangePaidPeriod}
                    name='PaidPeriod'
                    label='مدت زمان باز پرداخت'
                    required
                />
            </div>
            {showFinalData &&
                <article style={{ ...localStyles.detailWrapper as React.CSSProperties }}>

                    {result.map((item) => (
                        <div
                            key={item.title}
                            style={{ ...localStyles.resultWrapper as React.CSSProperties }}
                        >
                            <span style={{ fontSize: "11pt", color: "#777" }}>{item.title}</span>
                            <div style={{ fontSize: "10pt" }}>{item.value}</div>
                        </div>
                    ))}
                </article>}
        </Fragment >)
}

export default FacilitiesStepper;

const localStyles = {
    detailWrapper: {
        display: "flex",
        flexDirection: "column",
        padding: "2rem 4rem",
        fontSize: "12pt",
        gap: "1rem",
    },
    resultWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: ".2rem"

    }
}