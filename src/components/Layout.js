import NavigationBar from "./navigationBar";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
      <>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </>
    );
  };

  export default Layout;