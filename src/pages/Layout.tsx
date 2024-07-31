import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div style={styles.root}>
            <div style={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;

const styles = {
    root: {
        width: "100%",
        height: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    content: {
        width: "70%",
        minHeight: "35rem",
        borderRadius:"1.5rem",
        backgroundColor:"#fafafa"

    }
}

