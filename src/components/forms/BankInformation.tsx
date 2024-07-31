import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import NumberInput from "../inputs/NumberInput";

const BankInformation = () => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <div style={{ ...styles.FormWrapper as React.CSSProperties }}>
        <NumberInput control={control} name="AccountNumber" label="َشماره حساب" required />
        <NumberInput control={control} name="ShabaNumber" label="شماره شبا" required/>
        <NumberInput control={control} name="AverageRiyal" label="میانگین ریالی موجودی سالیانه" required/>
      </div>
    </Fragment>)
}
export default BankInformation;

const styles = {
  FormWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}
