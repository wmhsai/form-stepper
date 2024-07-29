import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div style={classes.root}>
            <div style={classes.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;

const classes = {
    root: {
        width: "100%",
        height: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    content: {
        width: "70%",
        borderRadius:"1.5rem",
        backgroundColor:"#fafafa"

    }
}

