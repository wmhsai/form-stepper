import { ControllerProps, useController } from 'react-hook-form';
import { INPUT_TYPES } from '../../utils/enums';
import { isValidShabaAccount } from '../../utils/Validations';
import { TextInputProps } from './inputsProps';

function TextInput(
    { name,
        disabled,
        label,
        handleChange,
        defaultValue,
        rules,
        required,
        control,
        type,
        placeholder
    }: TextInputProps) {

    const validationRules: ControllerProps['rules'] = {
        ...rules,
        ...(required && {
            required: rules?.required || '*',
        }),
    }
    if (type == INPUT_TYPES.SHABA_ACCOUNT) {
        validationRules!.validate = isValidShabaAccount;
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
            <label style={{ fontSize: "10pt", paddingBottom: ".2rem" }}>{label}</label>
            <input
                disabled={disabled}
                {...field}
                value={field.value || ""}
                name={name}
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                    field.onChange(e.target.value);
                    handleChange?.(e.target.value);
                }}
                style={{ ...styles.InputStyle, border: error ? '1px solid red' : '' }}
            />
            {error && (
                <span style={{ color: 'red', fontSize: "8pt" }}>{error.message}</span>
            )}
        </div>
    );
}

export default TextInput;

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
