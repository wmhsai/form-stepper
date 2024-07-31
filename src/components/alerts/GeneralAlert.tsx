import { AlertProps } from '../../types/AlertTypes';
import { iconTypes } from './AlertTypes';

const GeneralAlert = (props: AlertProps) => {
    const {
        message,
        alertType,
    } = props;

    const icon = iconTypes[alertType];
    return (
        <div role="alert" style={{ ...styles.root as React.CSSProperties }}>
            <div><p style={{ fontSize: "12pt" }}>{message}</p></div>
            <img src={icon} style={{ width: "2rem" }} alt='img' />
        </div>
    )
}
export default GeneralAlert;

const styles = {
    root: {
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