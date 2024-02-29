import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="bg-primary py-1">
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-11">
                <p className="text-white text-center">
                  Sign up and get 20% off to your first order.{" "}
                  <Link className="underline font-bold" >
                    Sign Up Now
                  </Link>
                </p>
              </div>

              <div className="col-span-1">
                <p
                  className="text-white cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
