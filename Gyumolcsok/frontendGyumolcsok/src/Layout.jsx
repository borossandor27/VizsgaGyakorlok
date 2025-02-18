import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">Fejléc</header>
      <nav className="bg-gray-800 text-white p-2">
        <ul className="flex space-x-4 justify-center">
          <li><a href="/" className="hover:underline">Főoldal</a></li>
          <li><a href="/about" className="hover:underline">Rólunk</a></li>
          <li><a href="/contact" className="hover:underline">Kapcsolat</a></li>
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <Outlet /> {/* Ez helyettesíti a {children}-t */}
      </main>
      <footer className="bg-gray-700 text-white text-center p-4">Lábléc</footer>
    </div>
  );
};

export default Layout;
