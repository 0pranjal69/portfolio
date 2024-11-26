import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";

function About() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = ref2.current;
    gsap.fromTo(
      el,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className=" ">
      {isTabletOrMobile ? (
        <div className="w-full h-full bg-zinc-900  gap-4 p-10 overflow-hidden ">
          <div className=" h-full flex flex-col items-center text-white ">
            <div className="w-[50vw] flex items-center h-[50vw] mb-10" ref={ref2}>
              <div className="w-full h-full bg-[url('/profile.jpg')] bg-center bg-cover rounded  shadow-[1px_1px_10px_0px_#fff]"></div>
            </div>

            <div className="text text-[4.5vw] font-cursive text-center" ref={ref}>
              <h1>
                Hi, I'm Pranjal, a MERN stack developer and a second-year BCA
                student at Maharishi Dayanand University. I specialize in
                building full-stack web applications using MongoDB, Express,
                React, and Node.js. Along with my core expertise, I also have
                experience working with Python and MySQL. I'm passionate about
                leveraging technology to create efficient, scalable solutions
                and continuously expanding my skill set to stay ahead in the
                dynamic field of web development.
              </h1>
              <br />
              <h1>
                When I'm not coding, you'll likely find me immersed in esports
                games or diving into psychology books.
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen bg-zinc-900 flex gap-4 p-10 overflow-hidden">
          <div className="w-[70vw] h-full flex items-center text-white ">
            <div className="text text-[2.5vw] font-cursive" ref={ref}>
              <h1>
                Hi, I'm Pranjal, a MERN stack developer and a second-year BCA
                student at Maharishi Dayanand University. I specialize in
                building full-stack web applications using MongoDB, Express,
                React, and Node.js. Along with my core expertise, I also have
                experience working with Python and MySQL. I'm passionate about
                leveraging technology to create efficient, scalable solutions
                and continuously expanding my skill set to stay ahead in the
                dynamic field of web development.
              </h1>
              <br />
              <h1>
                When I'm not coding, you'll likely find me immersed in esports
                games or diving into psychology books.
              </h1>
            </div>
          </div>

          <div className="w-[30vw] flex items-center h-full" ref={ref2}>
            <div className="w-full h-1/2 bg-[url('/profile.jpg')] bg-center bg-cover rounded  shadow-[1px_1px_10px_0px_#fff]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
