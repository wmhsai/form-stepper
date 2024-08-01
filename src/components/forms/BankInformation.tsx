import { useFormContext } from "react-hook-form";
import { styles } from ".";
import { INPUT_TYPES } from "../../utils/enums";
import NumberInput from "../inputs/NumberInput";
import SeparatedPriceInput from "../inputs/SeparatedPriceInput";
import TextInput from "../inputs/TextInput";

const BankInformation = () => {
  const { control } = useFormContext();
  return (
    <form style={{ ...styles.FormWrapper as React.CSSProperties }}>
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
        placeholder={"... IR"}

        required
      />
      <SeparatedPriceInput
        control={control}
        name="AverageRiyal"
        label="میانگین ریالی موجودی سالیانه"
        required
      />
    </form>
  )
}
export default BankInformation;