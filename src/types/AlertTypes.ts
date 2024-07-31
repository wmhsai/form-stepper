import { ALERT_TYPES } from "../utils/enums";

export interface AlertProps {
    alertType: ALERT_TYPES,
    title?: string,
    id: number | string,
    message: string
}