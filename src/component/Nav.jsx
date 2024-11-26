import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <div className="">
      {isTabletOrMobile ? (
        <div className="w-[100vw] h-[10vh]  flex justify-center fixed text-white z-20">
          <div className="links w-[100vw] flex  items-center justify-evenly cursor-pointer">
            <a
              href="https://facebook.com"
              className="text-2xl relative overflow-hidden hover:scale-110
              hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-800 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible "
            >
              <i>
                <FaFacebook />
              </i>
            </a>
            <a
              href="https://instagram.com"
              className="text-2xl relative overflow-hidden hover:scale-110
              hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-[url('https://cdn.vectorstock.com/i/750p/90/99/instagram-logo-color-background-vector-47279099.avif')] after:bg-center after:bg-cover after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <FaInstagram />
              </i>
            </a>
            <a
              href="https://Linkedin.com"
              className="text-2xl relative overflow-hidden hover:scale-110
              hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-800 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a
              href="https://x.com"
              className="text-2xl relative overflow-hidden hover:scale-110
              hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-500 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <AiFillTwitterCircle />
              </i>
            </a>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[10vh]  flex justify-center fixed text-white z-20">
          <div className="links w-1/2 flex  items-center justify-evenly cursor-pointer">
            <a
              href="https://facebook.com"
              className="text-2xl relative overflow-hidden hover:scale-110
                hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-800 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible "
            >
              <i>
                <FaFacebook />
              </i>
            </a>
            <a
              href="https://instagram.com"
              className="text-2xl relative overflow-hidden hover:scale-110
                hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-[url('https://cdn.vectorstock.com/i/750p/90/99/instagram-logo-color-background-vector-47279099.avif')] after:bg-center after:bg-cover after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <FaInstagram />
              </i>
            </a>
            <a
              href="https://Linkedin.com"
              className="text-2xl relative overflow-hidden hover:scale-110
                hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-800 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a
              href="https://x.com"
              className="text-2xl relative overflow-hidden hover:scale-110
                hover:drop-shadow-[0px_0px_10px_white] z-10  after:absolute after:h-full after:w-full after:bg-blue-500 after:-top-[100%] hover:after:top-0 after:-z-10 after:transition-all after:rounded hover:after:scale-125 hover:after:w-[110%] hover:overflow-visible"
            >
              <i>
                <AiFillTwitterCircle />
              </i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
