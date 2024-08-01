import { Control, UseControllerProps } from "react-hook-form";
import { INPUT_TYPES } from "../../utils/enums";

type EventHandler = (value: string) => void | ((event: React.FocusEvent<HTMLInputElement>) => void);

type FormValues = Record<string, unknown>;
type ValidationRules = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export interface InputsMainProps extends UseControllerProps<FormValues> {
  label?: string;
  childProps?: object;
  required?: boolean;
  type?: INPUT_TYPES;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onClick?: EventHandler;
  name: string;
  rules?: ValidationRules;
  control: Control;
  handleChange?: EventHandler;
  handleFocus?: EventHandler;
  handleBlur?: EventHandler;
}

export interface InputProps extends InputsMainProps {
  variant?: "filled" | "outlined" | "standard";
}

export interface SelectionProps extends InputsMainProps {
  options: Array<{ value: number; name: string; }>
  selectedOption: string;
  onChange: (value: string) => void;
  placeholder?: string;
}
