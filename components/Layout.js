import CountDown from "./CountDown";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <CountDown/> */}
      <Footer />
    </>
  );
};

export default Layout;
