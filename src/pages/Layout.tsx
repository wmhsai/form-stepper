import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <main style={styles.root}>
            <section style={styles.content}>
                <Outlet />
            </section>
        </main>
    )
}

export default Layout;

const styles = {
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "70%",
        minHeight: "38rem",
        borderRadius: "1.5rem",
        backgroundColor: "#fafafa"

    }
}

