import React from 'react';
import { ControllerProps, useController } from 'react-hook-form';
import { styles } from '.';
import { SelectionProps } from './inputsProps';

const ComboInput: React.FC<SelectionProps> = ({ options, selectedOption, onChange, name, defaultValue, rules, required, control, label, disabled }) => {
  const validationRules: ControllerProps['rules'] = {
    ...rules,
    ...(required && {
      required: rules?.required || '*',
    }),
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
    rules: validationRules,
    defaultValue: defaultValue ?? null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    field.onChange(newValue);
  };

  return (
    <div style={{ ...styles.comboWrapper as React.CSSProperties }}>
      <label style={{ ...styles.labelStyle as React.CSSProperties }}>
        {label}
        {required ? '*' : ''}
      </label>
      <select
        disabled={disabled}
        name={name}
        value={selectedOption}
        onChange={handleChange}
        style={{
          ...styles.selectStyle, border: error ? '1px solid red' : '',
        }}
      >
        <option value="">انتخاب کنید...</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div >
  );
};

export default ComboInput;