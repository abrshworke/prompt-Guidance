import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12">

        <div>
          <h3 className="text-xl font-semibold">AI Power Prompts</h3>
          <p className="text-sm mt-2">Discover and Share AI powered Prompts.</p>
        </div>
       
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-8 mt-2">
            <a href="#" className="hover:text-white"><FaFacebook size={28} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={28} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={28} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={28} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
