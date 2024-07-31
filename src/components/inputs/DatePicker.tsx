import React from 'react';
import { ControllerProps, useController } from 'react-hook-form';
import { styles } from '.';
import { InputProps } from './inputsProps';

function DatePickerCustom({ name, disabled, label, handleChange, defaultValue, rules, required, control }: InputProps) {

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
        <div style={{ ...styles.textInputWrapper as React.CSSProperties }}>
            <label style={{ ...styles.labelStyle as React.CSSProperties }}>
                {label}
                {required ? '*' : ''}
            </label>
            <input
                disabled={disabled}
                {...field}
                value={field.value || ""}
                name={name}
                type="date"
                onChange={(e) => {
                    field.onChange(e.target.value);
                    handleChange?.(e.target.value);
                }}
                style={{ ...styles.inputStyle as React.CSSProperties, border: error ? '1px solid red' : '' }}
            />
            {error && (
                <span style={{ ...styles.spanStyle as React.CSSProperties }}>{error.message}</span>
            )}
        </div>
    );
}

export default DatePickerCustom;

// const styles = {
//     TextInputWrapper: {
//         width: '20rem',
//         display: "flex",
//         flexDirection: "column"
//     },
//     InputStyle: {
//         height: "2rem",
//         borderRadius: "1rem",
//         padding: ".2rem",
//     }
// }

