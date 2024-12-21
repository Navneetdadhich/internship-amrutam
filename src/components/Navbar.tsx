import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-amber-100">
        <Link to="/" className="text-xl font-bold text-green-700">
             AMRUTAM
           </Link>
        
        <div className="space-x-4">
          <a href="#" className="text-primary">Home</a>

          <Link to="/find-doctors" className="text-primary">Find Doctors</Link>
          <a href="#" className="text-primary">About Us</a>
        </div>
        
        <div className="space-x-4">
          <button className="px-4 py-2">Login</button>
          <button className="px-4 py-2 bg-primary text-white rounded">Sign-up</button>
        </div>
      </nav>
    );
   };
   export default Navbar;