import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-[#02060c] text-gray-300 pt-10 pb-6">
      <div>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & App Links */}
          <div className="mb-8 md:mb-0 flex flex-col items-start mt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
              className="w-32 mb-4"
            />
            <p className="text-sm mb-4 text-black">© 2025 Swiggy</p>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=in.swiggy.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            <div>
              <h3 className=" font-semibold mb-3 text-black text-2xle">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.swiggy.com/about"
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://careers.swiggy.com/"
                    className="hover:underline"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/team"
                    className="hover:underline"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/swiggy-one"
                    className="hover:underline"
                  >
                    Swiggy One
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h3 className=" font-semibold  text-black text-2xl">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.swiggy.com/support"
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/support"
                    className="hover:underline"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://partner-with-us.swiggy.com/"
                    className="hover:underline"
                  >
                    Partner with us
                  </a>
                </li>
                <li>
                  <a
                    href="https://ride.swiggy.com/"
                    className="hover:underline"
                  >
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black text-2xl">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.swiggy.com/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/refund-policy"
                    className="hover:underline"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/cookie-policy"
                    className="hover:underline"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" font-semibold text-black text-2xl">
                We deliver to
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.swiggy.com/city/bangalore"
                    className="hover:underline"
                  >
                    Bangalore
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/city/delhi"
                    className="hover:underline"
                  >
                    Delhi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/city/mumbai"
                    className="hover:underline"
                  >
                    Mumbai
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/city/hyderabad"
                    className="hover:underline"
                  >
                    Hyderabad
                  </a>
                </li>
                {/* Add more cities as needed */}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          <span>© 2025 Clone of swiggy Technologies Pvt. Ltd</span>
        </div>
      </div>
    </footer>
  );
}
