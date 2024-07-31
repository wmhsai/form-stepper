
import CurrencyFormat from 'react-currency-format';
import { ControllerProps, useController } from 'react-hook-form';
import { isValidBankAccount, isValidPhoneNumber, isValidateNationalCode } from "../../utils/Validations";
import { INPUT_TYPES } from '../../utils/enums';
import { TextInputProps } from './inputsProps';

function SeparatedPriceInput({
  name,
  disabled,
  label,
  handleChange,
  defaultValue,
  rules,
  required,
  control,
  type,
}: TextInputProps) {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-', '.'].includes(event.key) && event.preventDefault();
  };

  const validationRules: ControllerProps['rules'] = {
    ...rules,
    ...(required && {
      required: rules?.required || '*',
    }),
  }

  if (type == INPUT_TYPES.NATIONAL_CODE) {
    validationRules!.validate = isValidateNationalCode;
  }
  else if (type == INPUT_TYPES.PHONE_NUMBER) {
    validationRules!.validate = isValidPhoneNumber;
  }
  else if (type == INPUT_TYPES.BANK_ACCOUNT) {
    validationRules!.validate = isValidBankAccount;
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
    rules: validationRules,
    defaultValue: defaultValue ?? null,
  });

  return (
    <div style={{ ...styles.TextInputWrapper as React.CSSProperties }}>
      <label style={{ fontSize: "10pt", paddingBottom: ".2rem" }}>{!disabled ? label : null}</label>
      <CurrencyFormat
        onValueChange={(values: { value: string | number }) => {
          handleChange?.(values.value);
        }}
        disabled={disabled}
        {...field}
        value={field.value || ""}
        name={name}
        onKeyDown={handleKeyDown}
        thousandSeparator
        isNumericString
        style={{ ...styles.InputStyle as React.CSSProperties }} />
      {error && (
        <span style={{ color: 'red', fontSize: "8pt" }}>{error.message}</span>
      )}
    </div>
  );
}

export default SeparatedPriceInput;

const styles = {
  TextInputWrapper: {
    width: '20rem',
    display: "flex",
    flexDirection: "column"
  },
  InputStyle: {
    height: "1.5rem",
    borderRadius: "1rem",
    padding: ".2rem",
  }
}
