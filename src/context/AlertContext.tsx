import { createContext, useState } from "react";

export type AlertState = {
  show: boolean;
  message: string;
  error: boolean;
  severity: string;
  autoHide: number;
};
export type AlertContextType = {
  alert: AlertState;
  setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
};
type Props = {
  children: React.ReactNode;
}
const alertContext = createContext<AlertContextType | null>(null);
export const AlertProvider: React.FC<Props> = ({ children }) => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: "",
    error: false,
    severity: "success",
    autoHide: 3000,
  });
  return (
    <alertContext.Provider value={{ alert, setAlert }}>
      {children}
    </alertContext.Provider>
  );
};
