
export default () => {
  const socialLinks = [
    { icon: '/assets/icons/facebook.svg', href: 'https://facebook.com' },
    { icon: '/assets/icons/twitter.svg', href: 'https://twitter.com' },
    { icon: '/assets/icons/instagram.svg', href: 'https://instagram.com' },
    { icon: '/assets/icons/linkedin.svg', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-green-800 mt-10 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-100 text-sm">
              Connecting farmers and consumers directly to ensure fair trade and fresh produce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/about" className="text-gray-100 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-100 hover:text-white text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-100 hover:text-white text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-100 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-100 text-sm">Email: support@agripathway.ng</p>
            <p className="text-gray-100 text-sm">Phone: +234 812 345 6789</p>
            <p className="text-gray-100 text-sm">Location: Lagos, Nigeria</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-100 text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-md text-white font-bold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <p className="text-gray-100 text-sm">
            © {new Date().getFullYear()} AgriPathway. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src={link.icon} alt="social-icon" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

