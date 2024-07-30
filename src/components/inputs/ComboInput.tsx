import React from 'react';
import { ControllerProps, useController } from 'react-hook-form';
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
      <label style={{ fontSize: "10pt",paddingBottom:".2rem" }}>{label}</label>
      <select
        disabled={disabled}
        name={name}
        value={selectedOption}
        onChange={handleChange}
        style={{
          ...styles.selectStyle, border: error ? '1px solid red' : '',
        }}
      >
        <option value="">Select...</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboInput;

const styles = {
  selectStyle: {
    width: '20rem',
    height: "2rem",
    fontSize: "12pt",
    borderRadius: "1rem",
    padding: ".2rem",
  },
  comboWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: ".1rem"
  }
}
