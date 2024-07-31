import ErrorIcon from '../../assets/images/ErrorAlertIcon.svg';
import InfoIcon from '../../assets/images/InfoAlertIcon.svg';
import SuccesIcon from '../../assets/images/SuccesAlertIcon.svg';
import WarningIcon from '../../assets/images/WarningAlertIcon.svg';

export const iconTypes: Record<string, string> = {
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
    success: SuccesIcon
};
