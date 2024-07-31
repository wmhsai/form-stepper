import { ALERT_TYPES } from '../../utils/enums';
import { iconTypes } from './AlertTypes';

interface AlertProps {
    alertType: ALERT_TYPES,
    title?: string,
    id: number | string,
    message: string
}
const GeneralAlert = (props: AlertProps) => {
    const {
        message,
        alertType,
    } = props;

    const icon = iconTypes[alertType];
    return (
        <div role="alert" style={{ ...styles.Root as React.CSSProperties, }}>
            <img src={icon} style={{ width: "2rem" }} />
            <div><p style={{ fontSize: "12pt" }}>{message}</p></div>
        </div>
    )
}
export default GeneralAlert;

const styles = {
    Root: {
        display: 'flex',
        gap: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '1.5rem',
        padding: ".5rem 1rem",
        minWidth: "22rem",
        backgroundColor: "#fff",
        boxShadow: '0px 3px 3px 3px rgba(0,0,0,0.3)',
        '&:hover .showOnHover': {
            display: 'block'
        },
    }
}