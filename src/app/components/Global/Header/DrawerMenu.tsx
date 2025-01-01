import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const DrawerMenu = () => {
  return (
    <div className="h-screen content-between">
      <div>
        <ul className="space-y-3.5 mt-8 mb-8">
          <li className="max-w-auto text-gray-900 uppercase text-xl font-bold">
            <Link href="/" className="animated-underline">
              Home
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/main-dishes" className="animated-underline">
              Main Dishes
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/quick-meals" className="animated-underline">
              Quick Meals
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/desserts" className="animated-underline">
            Desserts
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/about" className="animated-underline">
              About us
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/contact" className="animated-underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="transition-all w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 text-lg rounded">
          Newsletter
        </button>
        <div className="flex items-center gap-1.5 mt-5">
          <span className="font-semibold text-sm uppercase">
            Let&#39;s be friends:
          </span>
          <ul className="flex items-center gap-1">
            {[
              {
                href: "https://www.facebook.com/mygrandmarecipes/",
                icon: <FaFacebookSquare />,
                label: "Facebook",
              },
              {
                href: "https://x.com/mygrandmarecipes",
                icon: <FaSquareXTwitter />,
                label: "Twitter",
              },
              {
                href: "https://www.instagram.com/mygrandmarecipes/",
                icon: <FaInstagramSquare />,
                label: "Instagram",
              },
              {
                href: "https://www.pinterest.com/mygrandmarecipes/",
                icon: <FaPinterest />,
                label: "Pinterest",
              },
            ].map(({ href, icon, label }, index) => (
              <li key={index}>
                <Link href={href} aria-label={label}>
                  {React.cloneElement(icon, {
                    className:
                      "size-7 text-gray-650 transition-all duration-300 hover:text-gray-900",
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
