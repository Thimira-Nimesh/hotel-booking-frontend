export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Ocean Serenity Inn</h2>
            <p className="text-base text-gray-200 leading-relaxed">
              Experience the beauty and tranquility of our sea-view hotel. Our
              dedicated team ensures you have a memorable stay, surrounded by
              serenity and comfort.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <a
                  href="/rooms"
                  className="hover:text-gray-50 transition-colors"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-50 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-50 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-gray-50 transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-base text-gray-200">
              123 Ocean Drive, Serenity City, Coastal Area
            </p>
            <p className="text-base text-gray-200">Phone: +123 456 7890</p>
            <p className="text-base text-gray-200">
              Email: info@oceankindinn.com
            </p>
            <div className="flex space-x-6 mt-6">
              {/* Social Media Links */}
              <a href="#" className="hover:text-gray-50">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-50">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-50">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Ocean Serenity Inn. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
