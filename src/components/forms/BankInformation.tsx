import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import NumberInput from "../inputs/NumberInput";
import { INPUT_TYPES } from "../../utils/enums";
import TextInput from "../inputs/TextInput";
import SeparatedPriceInput from "../inputs/SeparatedPriceInput";

const BankInformation = () => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <div style={{ ...styles.FormWrapper as React.CSSProperties }}>
        <NumberInput 
        control={control}
         name="AccountNumber" 
         label="شماره حساب" 
         required 
         type={INPUT_TYPES.BANK_ACCOUNT}
         />
        <TextInput 
        control={control} 
        name="ShabaNumber"
         label="شماره شبا"
         type={INPUT_TYPES.SHABA_ACCOUNT}
         placeholder={"... IR123"}

          required
          />
        <SeparatedPriceInput 
        control={control}
         name="AverageRiyal"
          label="میانگین ریالی موجودی سالیانه"
           required
           />
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
