import React from "react";
import { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";

function Footer() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
        { y: -200 },
      {
        y: 0,
        
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 30%",
        },
      }
    );
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 704px)" });
  return (
    <div ref={ref} className="w-full h-full bg-footer-bg flex justify-center items-center text-white flex-col overflow-hidden relative z-[8]">
      {isTabletOrMobile ? (
        <div className="container w-[70vw] h-full  flex flex-col  gap-10 pt-[10vh] text-center ">
          <div
            ref={ref}
            className="TY  font-extrabold  text-[10vh] bg-gradient-to-r from-gradientStart via-gradientMid1 to-gradientMid2 bg-clip-text text-transparent leading-[80px]"
          >
            <h1>Thank You!!</h1>
          </div>
          <div className="content text-[4vw] mb-10">
            
            "Looking for a skilled MERN developer? Let's build something amazing together!"
          </div>
        </div>
      ) : (
        <div  className="container w-[70vw] h-full  flex flex-col justify-stretch gap-4 pt-[10vh] text-center ">
          <div
            
            className="TY  font-extrabold  text-[15vh] bg-gradient-to-r from-gradientStart via-gradientMid1 to-gradientMid2 bg-clip-text text-transparent"
          >
            <h1>Thank You!!</h1>
          </div>
          <div className="content text-[3vh] ]">
            "Looking for a skilled MERN developer? Let's build something amazing together!"
          </div>
        </div>
      )}

      {isTabletOrMobile ? (
        <div className="flex self-start">
          <div className=" contact flex  items-start text-[3vw] flex-col mb-5">
            <div className="phone flex justify-center items-center">
              <i className="px-3 ">
                <FaPhoneAlt />
              </i>
              +91 9650692774
            </div>

            <div className="email flex justify-center items-center">
              <i className="px-3">
                <MdOutlineEmail />
              </i>
              <a href="https://www.gmail.com/pranjalratanbhardwaj@gmail.com">
                pranjalratanbhardwaj@gmail.com
              </a>
            </div>

            <div className="github flex justify-center items-center">
              <i className="px-3">
                <FaGithub />
              </i>
              0pranjal69
            </div>
          </div>
        </div>
      ) : (
        <div className="contact flex justify-evenly text-[2.5vh] flex-wrap my-5">
          <div className="phone flex justify-center items-center">
            <i className="px-3">
              <FaPhoneAlt />
            </i>
            +91 9650692774
          </div>
          <div className="breaker w-[1px] h-7 bg-white"></div>
          <div className="email flex justify-center items-center">
            <i className="px-3">
              <MdOutlineEmail />
            </i>
            <a href="https://www.gmail.com/pranjalratanbhardwaj@gmail.com">
              pranjalratanbhardwaj@gmail.com
            </a>
          </div>
          <div className="breaker w-[1px] h-7 bg-white"></div>
          <div className="github flex justify-center items-center">
            <i className="px-3">
              <FaGithub />
            </i>
            0pranjal69
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
