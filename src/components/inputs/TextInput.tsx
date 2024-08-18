import { ControllerProps, useController } from 'react-hook-form';
import { styles } from '.';
import { INPUT_TYPES } from '../../utils/enums';
import { isValidShabaAccount } from '../../utils/Validations';
import { InputProps } from './inputsProps';

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
    }: InputProps) {

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
        <div style={styles.textInputWrapper}>
            <label style={styles.labelStyle}>
                {label}
                {required ? '*' : ''}
            </label>
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
                style={{ ...styles.inputStyle, border: error ? '1px solid red' : '' }}
            />
            {error && (
                <span style={styles.spanStyle}>{error.message}</span>
            )}
        </div>
    );
}

export default TextInput;