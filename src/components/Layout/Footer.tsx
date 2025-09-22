import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Websites', path: '/ai-websites' },
    { name: 'Training', path: '/training' },
    { name: 'Fintech', path: '/fintech' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Palbyte Solutions</h3>
            <p className="text-sm opacity-90">
              Empowering African businesses with AI-driven websites, training, and fintech innovations.
            </p>
            <div className="space-y-2 text-sm">
              <p>Nairobi, Kenya</p>
              <p>Phone: +254 708 467 027</p>
              <p>Email: mucherupaul9@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>AI-Powered Websites</li>
              <li>Training & Consultancy</li>
              <li>Fintech Solutions</li>
              <li>Business Integration</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} Palbyte Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;