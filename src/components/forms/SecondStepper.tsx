import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import DatePicker from "../inputs/DatePicker";
import NumberInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";

const SecondStepper = () => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <div style={{ ...classes.FormWrapper as React.CSSProperties }}>
        <TextInput control={control} name="FirstName" label="First Name" required />
        <TextInput control={control} name="LastName" label="Last Name" required />
        <NumberInput control={control} name="NationalCode" label="national Code" required />
        <NumberInput control={control} name="PhoneNumber" label="Phone Number" required />
        <DatePicker control={control} name="BirthDate" label="BirthDate" required />
      </div>
    </Fragment>
  )
}

export default SecondStepper;

const classes = {
  FormWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}
