import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@/assets/logo.png";
import paymentImg from "@/assets/payment.png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-28 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-3">
            <img src={logo} alt="" />
            <p className="mt-5 font-thin ">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex mt-5 ">
              <li className="mr-4 bg-white rounded-full p-2 w-10 h-10 border text-center hover:bg-gray-100">
                <Link to="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li className="mr-4 bg-white rounded-full p-2 w-10 h-10 border text-center hover:bg-gray-100">
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className="mr-4 bg-white rounded-full p-2 w-10 h-10 border text-center hover:bg-gray-100">
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <ul>
              <li className="font-bold mb-5">Company</li>
              <li className="mb-5 text-gray-500">
                <Link to="/">About</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Features</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Works</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <ul>
              <li className="font-bold mb-5">Help</li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Customer Support</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Delivery Detail</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Trams & Condition</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <ul>
              <li className="font-bold mb-5">Faq</li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Account</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Manage Deliveries</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Orders</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Payments</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <ul>
              <li className="font-bold mb-5">Resources</li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Free eBooks</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Development Tutorial</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">How to - Blog</Link>
              </li>
              <li className="mb-5 text-gray-500">
                <Link to="/">Youtube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-500 border-0" />
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-12 md:col-span-6">
            <p className=" text-sm text-gray-500">
              © 2024 Nex Shopping. All rights reserved.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:flex md:justify-end">
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
