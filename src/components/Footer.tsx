import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold text-white">PixelCore</h3>
          <p className="mt-4 text-sm">
            Trusted IT outsourcing partner delivering scalable digital solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Software Development</li>
            <li>Cloud & DevOps</li>
            <li>Data Engineering</li>
            <li>AI & ML</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">📍 India</p>
          <p className="text-sm">✉️ info@company.com</p>
          <p className="text-sm">📞 +91-XXXXXXXXXX</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} PixelCore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
