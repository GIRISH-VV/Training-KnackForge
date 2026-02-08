import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <Navbar />
        <main className="content">{children}</main>
      </div>
    </>
  );
};

export default Layout;