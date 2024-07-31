import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { INPUT_TYPES } from "../../utils/enums";
import DatePicker from "../inputs/DatePicker";
import NumberInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";

const PersonalInfoStepper = () => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <div style={{ ...styles.FormWrapper as React.CSSProperties }}>
        <TextInput control={control} name="FirstName" label="نام" required />
        <TextInput control={control} name="LastName" label="نام خانوادگی" required />
        <NumberInput control={control} name="NationalCode" label="کد ملی" required type={INPUT_TYPES.NATIONAL_CODE} />
        <NumberInput control={control} name="PhoneNumber" label="شماره تماس" required type={INPUT_TYPES.PHONE_NUMBER} />
        <DatePicker control={control} name="BirthDate" label="تاریخ تولد" required />
      </div>
    </Fragment>
  )
}

export default PersonalInfoStepper;

const styles = {
  FormWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}
