import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300">
          E-Commerce Store
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/cart" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};