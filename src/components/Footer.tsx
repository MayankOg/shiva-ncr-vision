import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show back to top button when scrolled
  useState(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const quickLinks = {
    'About Us': [
      { name: 'Our Story', href: '/about' },
      { name: 'Careers', href: '/careers' }
    ],
    'Services': [
      { name: 'Architecture', href: '/services#architecture' },
      { name: 'Consultancy', href: '/services#consultancy' },
      { name: 'Development', href: '/services#development' },
      { name: 'Feasibility Reports', href: '/services#feasibility' }
    ],
    'Resources': [
      { name: 'Insights', href: '/insights' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Glossary', href: '/glossary' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' }
    ]
  };

  const offices = [
    {
      name: 'Main Office',
      address: 'Shop No 3, Mathura Road, Opposite Bijalighar, Hathras Dehat, Hathras, Uttar Pradesh, 204101',
      phone: '+91 XXXX XXXX',
      email: 'info@shivancrconsultants.com',
      hours: 'Mon–Sat, 9 AM–6 PM IST'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-bold">Shiva NCR Consultants</h3>
                  <p className="text-xs text-primary-foreground/70">Architecture • Development • Consultancy</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Premier architecture, development and consultancy services in NCR. 
                From concept to construction - your vision engineered to reality.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Office Location */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <h4 className="text-xl font-semibold mb-8 text-center">Our Office</h4>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {offices.map((office) => (
                  <div key={office.name} className="bg-primary-foreground/5 rounded-lg p-6">
                    <h5 className="font-semibold text-accent mb-4">{office.name}</h5>
                    <div className="space-y-3 text-primary-foreground/80">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                      <div className="text-sm text-primary-foreground/60">
                        {office.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2025 Shiva NCR Consultants. All Rights Reserved.
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Website by{' '}
              <span className="hover:text-accent transition-colors cursor-pointer">
                Digital Excellence Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent-dark text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </footer>
  );
};

export default Footer;