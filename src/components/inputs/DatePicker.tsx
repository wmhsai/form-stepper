import React from 'react';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ControllerProps, useController } from 'react-hook-form';
import DatePicker from "react-multi-date-picker";
import { styles } from '.';
import { InputProps } from './inputsProps';
function DatePickerCustom({ name, disabled, label, defaultValue, rules, required, control }: InputProps) {
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
            <DatePicker
                calendarPosition="bottom-right"
                calendar={persian}
                locale={persian_fa}
                disabled={disabled}
                value={field.value || ""}
                name={name}
                onChange={(date) => field.onChange(date)}
                style={{ ...styles.inputStyle as React.CSSProperties, border: error ? '1px solid red' : '', width: '20rem', }}
            />
            {error && (
                <span style={{ ...styles.spanStyle as React.CSSProperties }}>{error.message}</span>
            )}
        </div>
    );
}

export default DatePickerCustom;