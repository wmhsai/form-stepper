
import { ControllerProps, useController } from 'react-hook-form';
import { isValidPhoneNumber, isValidateNationalCode } from "../../utils/Validations";
import { INPUT_TYPES } from '../../utils/enums';
import { TextInputProps } from './inputsProps';

function NumberInput({ name, disabled, label, handleChange, defaultValue, rules, required, control, type }: TextInputProps) {

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
            <input
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
                style={{ ...styles.InputStyle, border: error ? '1px solid red' : '', }}
            />
            {error && (
                <span style={{ color: 'red', fontSize: "8pt" }}>{error.message}</span>
            )}
        </div>
    );
}

export default NumberInput;

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
