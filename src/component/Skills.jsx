import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPython } from "react-icons/si";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";

function Skills() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const ref = useRef();
  const ref2 = useRef();
  const refres = useRef();
  const mark = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
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
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = refres.current;
    gsap.fromTo(
      el,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = mark.current;
    gsap.fromTo(
      el,
      { display: "none",
        x:200
      },
      {
        display: "block",
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  const items = [
    { text: "React", icon: <FaReact /> },
    { text: "Node.js", icon: <FaNodeJs /> },
    { text: "Python", icon: <FaPython /> },
    { text: "MongoDB", icon: <SiMongodb /> },
    { text: "MySQL", icon: <SiMysql /> },
    { text: "Express", icon: <SiExpress /> },
  ];

  return (
    <div className="bg-custom-radial h-full w-full overflow-hidden relative z-[9]">
      {isTabletOrMobile ? (
        <div className="text h-[24vh] flex justify-center items-center">
          <h1 className="uppercase text-[10vh] text-white  font-bold" ref={refres}>
            Skills
          </h1>
        </div>
      ) : (
        <div className="text h-[24vh] flex  items-center">
          <h1 className="uppercase text-[10vw]  text-white  font-bold" ref={ref}>
            Skills
          </h1>
        </div>
      )}

      <div
        className="content flex w-[80%] mb-10 h-fit justify-center m-auto flex-wrap"
        ref={ref2}
      >
        <div className="skill  w-[15rem] bg-[#7b4a84] flex flex-col justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <FaNodeJs />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>Node.js</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
        <div className="skill  w-[15rem] text-white flex flex-col justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <FaReact />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>React</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
        <div className="skill  w-[15rem] bg-[#7b4a84] flex flex-col justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <SiExpress />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>Express.js</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
        <div className="skill  w-[15rem] flex flex-col text-white justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <SiPython />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>Python</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
        <div className="skill  w-[15rem] bg-[#7b4a84] flex flex-col justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <SiMysql />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>MySql</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
        <div className="skill  w-[15rem] text-white flex flex-col justify-center items-center gap-5 py-10 px-1">
          <div className="logo text-[6em] drop-shadow-[1px_2px_5px_black]">
            <i>
              {" "}
              <SiMongodb />{" "}
            </i>
          </div>
          <div className="heading text-[1.5em] font-bold">
            <h1>MongoDB</h1>
          </div>
          <div className="content text-center">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          </div>
        </div>
      </div>
      <div className="w-[90vw] m-auto text-white " ref={mark}>
        <Marquee speed={50} gradient={false}>
          {items.map((item, index) => (
            <div key={index} className="flex items-center text-5xl ">
              <span className="ml-[150px] mr-3 py-9 font-Josefin font-light">
                {item.text}
              </span>
              <span>{item.icon}</span>
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center mx-4 space-x-2 text-5xl font-semibold"
            >
              <span className="ml-[150px] mr-3 py-9 font-Josefin font-light">
                {item.text}
              </span>
              <span>{item.icon}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
