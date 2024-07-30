import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { INPUT_TYPES } from "../../utils/enums";
import DatePicker from "../inputs/DatePicker";
import NumberInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";

const SecondStepper = () => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <div style={{ ...styles.FormWrapper as React.CSSProperties }}>
        <TextInput control={control} name="FirstName" label="First Name" required />
        <TextInput control={control} name="LastName" label="Last Name" required />
        <NumberInput control={control} name="NationalCode" label="national Code" type={INPUT_TYPES.NATIONAL_CODE} required />
        <NumberInput control={control} name="PhoneNumber" label="Phone Number" type={INPUT_TYPES.PHONE_NUMBER} required />
        <DatePicker control={control} name="BirthDate" label="BirthDate" required />
      </div>
    </Fragment>
  )
}

export default SecondStepper;

const styles = {
  FormWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}
