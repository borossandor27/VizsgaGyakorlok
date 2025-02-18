import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
