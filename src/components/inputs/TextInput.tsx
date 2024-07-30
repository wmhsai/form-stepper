import { ControllerProps, useController } from 'react-hook-form';
import { TextInputProps } from './inputsProps';

function TextInput({ name, disabled, label, handleChange, defaultValue, rules, required, control }: TextInputProps) {

    const validationRules: ControllerProps['rules'] = {
        ...rules,
        ...(required && {
            required: rules?.required || '*',
        }),
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
        <div style={{ ...classes.TextInputWrapper as React.CSSProperties }}>
            <label style={{ fontSize: "10pt" }}>{!disabled ? label : null}</label>
            <input
                disabled={disabled}
                {...field}
                value={field.value || ""}
                name={name}
                type="text"
                onChange={(e) => {
                    field.onChange(e.target.value);
                    handleChange?.(e.target.value);
                }}
                style={{ ...classes.InputStyle, border: error ? '1px solid red' : '' }}
            />
            {error && (
                <span style={{ color: 'red' }}>{error.message}</span>
            )}
        </div>
    );
}

export default TextInput;

const classes = {
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
