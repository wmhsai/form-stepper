import React from "react";
import { UseGetAllBlu } from "../../hooks/UseBlu";
import { Facility, Loan } from "../../types/LoanTypes";
import { UserData } from "../../types/UserTypes";
import { formatWithCommas } from "../../utils/convert";

const ActiveLoanCard = ({ DBData }: { DBData: UserData }) => {
    const { data } = UseGetAllBlu();
    const myFacilities = data?.find((loan: Loan) => loan.id === DBData.facilities);
    const myRepayment = myFacilities?.repaymentType?.find((repayment: Facility) => repayment.value == DBData.PaidPeriod)

    return (
        <article style={{ ...styles.CardWrapper as React.CSSProperties }}>
            <h3 style={{ fontSize: "12pt", fontWeight: "bold" }}>{myFacilities?.name}</h3>
            <p style={{ fontSize: "11pt", color: "#555" }}>
                {`به مبلغ ${formatWithCommas(myFacilities?.amount)}و باز پرداخت  ${myRepayment?.name}`}
            </p>
        </article>
    )
}

export default ActiveLoanCard

const styles = {
    CardWrapper: {
        padding: "0 1rem",
        borderRadius: "1rem",
        backgroundColor: "#e5effe",
    },
}