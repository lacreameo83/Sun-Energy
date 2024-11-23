import React from "react";

function Footer2() {
  return (
    <footer className="relative bg-[#34bbb4]   py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide text-white">
            About Us
          </h3>
          <p className="text-sm text-white/80">
            At Jus Solar, we are committed to providing top-quality solar
            solutions that power your world sustainably and efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "Products", "Services", "Contact Us"].map(
              (link, index) => (
                <li
                  key={index}
                  className="transition-all hover:text-[#B6EFEE] cursor-pointer text-white/90"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Email: jussolar209@gmail.com.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: Port Harcourt, Nigeria</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide text-white">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {[
              {
                platform: "Facebook",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
                link: "https://facebook.com",
              },
              {
                platform: "Ticktok",
                img: "https://icon2.cleanpng.com/20240214/gus/transparent-tiktok-logo-letter-t-silhouette-black-and-white-o-black-and-white-silhouette-of-letter-1710878265159.webp",
                link: "https://twitter.com",
              },
              {
                platform: "Instagram",
                img: "https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg",
                link: "https://instagram.com",
              },
              {
                platform: "LinkedIn",
                img: "https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png",
                link: "https://linkedin.com",
              },
            ].map(({ platform, img, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={platform}
                className="p-2 bg-white/20 rounded-full transition hover:bg-[#B6EFEE] hover:scale-110"
              >
                <img
                  src={img}
                  alt={platform}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-4 sm:text-center text-sm text-white/80">
        <p>&copy; {new Date().getFullYear()} Jus Solar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer2;
