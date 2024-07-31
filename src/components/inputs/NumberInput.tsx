
import { ControllerProps, useController } from 'react-hook-form';
import { styles } from '.';
import { isValidBankAccount, isValidPhoneNumber, isValidateNationalCode } from "../../utils/Validations";
import { INPUT_TYPES } from '../../utils/enums';
import { InputProps } from './inputsProps';

function NumberInput({
    name,
    disabled,
    label,
    handleChange,
    defaultValue,
    rules,
    required,
    control,
    type,
}: InputProps) {

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
        <div style={{ ...styles.textInputWrapper as React.CSSProperties }}>
            <label style={{ ...styles.labelStyle as React.CSSProperties }}>
                {label}
                {required ? '*' : ''}
            </label>
            <input
                style={{ ...styles.inputStyle as React.CSSProperties, border: error ? '1px solid red' : '' }}
                disabled={disabled}
                {...field}
                value={field.value || ""}
                name={name}
                type="number"
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                    field.onChange(e.target.value);
                    handleChange?.(e.target.value);
                }}
            />
            {error && (
                <span style={{ ...styles.spanStyle as React.CSSProperties }}>{error.message}</span>
            )}
        </div>
    );
}
export default NumberInput;


