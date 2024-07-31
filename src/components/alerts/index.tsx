import { toast } from "sonner";
import { ALERT_TYPES } from "../../utils/enums";
import GeneralAlert from "./GeneralAlert";

export const showAlert = (msg: string, type: ALERT_TYPES) => {
    toast.custom((id) => <GeneralAlert alertType={type} id={id} message={msg} />, {
        duration: 2500
    })
}
