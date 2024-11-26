import React from "react";
import singla from "../assets/singlas.mp4";
import audi from "../assets/Uaudi.mp4";
import royal from "../assets/ree.mp4";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";
function Project() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: 200, opacity: 0 },
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
  const singlaRef = useRef();
  useEffect(() => {
    const el = singlaRef.current;
    gsap.fromTo(
      el,
      { y: 200, opacity: 0 },
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
  const audiRef = useRef();
  useEffect(() => {
    const el = audiRef.current;
    gsap.fromTo(
      el,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  const royalRef = useRef();
  useEffect(() => {
    const el = royalRef.current;
    gsap.fromTo(
      el,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 704px)" });
  return (
    <div ref={ref} className="h-full w-full bg-project-bg ">
      <div className="  flex justify-center items-center ">
        {" "}
        {isTabletOrMobile ? (
          <h1 className="uppercase h-[fit-content] text-white mt-10  w-[fit-content] text-[5vh]">
            projects
          </h1>
        ) : (
          <h1 className="uppercase h-[fit-content] text-white mt-10  w-[fit-content] text-[5rem]">
            projects
          </h1>
        )}
      </div>
      <div className="w-full h-[100vh] m-auto relative flex justify-center flex-wrap items-center">
        <div className="w-[80vw]  bg-[#6f23c6]  relative p-3 flex justify-evenly rounded-xl  ">
          <div className="w-[13rem] h-full relative " ref={singlaRef}>
            <div className="upper relative  before:w-[40%] before:h-[40px]  before:absolute before:right-0 before:rounded-bl-2xl before:shadow-[-16px_16px_0_#27272a] after:w-[38%] after:h-[35px] after:absolute after:right-0 after:top-0 after:rounded-2xl after:bg-zinc-800 after:content-['2024-07'] after:text-[12px] after:text-white after:flex after:justify-center after:items-center ">
              <div className="text w-[60%] h-[40px] bg-zinc-800 text-white rounded-tl-2xl rounded-tr-2xl flex p-3 text-lg items-center ">
                <h1>Singla's</h1>
              </div>
            </div>
            <div className="cnt w-full h-[300px] bg-zinc-800 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl relative p-3 after:w-[50px] after:h-[50px] after:bg-green-300 after:absolute after:right-0 after:bottom-0 after:rounded-br-2xl after:rounded-tl-2xl after:content-['#1'] after:flex after:justify-center after:items-center after:text-2xl shadow-[0px_5px_1px_0px_white]">
              <a href="#">
                <video
                  autoPlay
                  muted
                  loop
                  src={singla}
                  className="rounded shadow-lg hover:scale-110 transition-all"
                ></video>
              </a>
              <div className="text">
                <h1 className="text-2xl tracking-tighter text-white leading-6 mt-5 mb-3">
                  Technologies Used:-
                </h1>
                {["HTML", "CSS", "JavaScript"].map((item, index) => (
                  <li className="text-white">{item}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[13rem]  h-full relative" ref={audiRef}>
            <div className="upper relative  before:w-[40%] before:h-[40px]  before:absolute before:right-0 before:rounded-bl-2xl before:shadow-[-16px_16px_0_#bfdbfe] after:w-[38%] after:h-[35px] after:absolute after:right-0 after:top-0 after:rounded-2xl after:bg-blue-200 after:content-['2024-07'] after:text-[12px]  after:flex after:justify-center after:items-center">
              <div className="text w-[60%] h-[40px] bg-blue-200 rounded-tl-2xl rounded-tr-2xl flex p-3 text-lg items-center">
                <h1>Audi</h1>
              </div>
            </div>
            <div className="cnt w-full h-[295px] bg-blue-200 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl absolute p-3 after:w-[50px] after:h-[50px] after:bg-pink-400 after:absolute after:right-0 after:bottom-0 after:rounded-br-2xl after:rounded-tl-2xl after:content-['#2'] after:flex after:justify-center after:items-center after:text-2xl shadow-[0px_5px_1px_0px_red]">
              <a href="https://www.facebook.com">
                <video
                  autoPlay
                  muted
                  loop
                  src={audi}
                  className="rounded shadow-lg hover:scale-110 transition-all"
                ></video>
              </a>
              <div className="text">
                <h1 className="text-2xl tracking-tighter leading-6 mt-5 mb-3">
                  Technologies Used:-
                </h1>
                {["HTML", "CSS", "JavaScript"].map((item, index) => (
                  <li>{item}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[14rem]  h-full relative" ref={royalRef}>
            <div className="upper relative  before:w-[40%] before:h-[40px]  before:absolute before:right-0 before:rounded-bl-2xl before:shadow-[-16px_16px_0_#27272a] after:w-[38%] after:h-[35px] after:absolute after:right-0 after:top-0 after:rounded-2xl after:bg-zinc-800 after:content-['2024-08'] after:text-[12px] after:text-white after:flex after:justify-center after:items-center">
              <div className="text w-[60%] h-[40px] bg-zinc-800 rounded-tl-2xl rounded-tr-2xl flex p-3 text-lg items-center text-white">
                <h1>Royal Enfield</h1>
              </div>
            </div>
            <div className="cnt w-full h-[295px] bg-zinc-800 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl absolute p-3 after:w-[50px] after:h-[50px] after:bg-green-300 after:absolute after:right-0 after:bottom-0 after:rounded-br-2xl after:rounded-tl-2xl after:content-['#3'] after:flex after:justify-center after:items-center after:text-2xl shadow-[0px_5px_1px_0px_yellow]">
              <a href="#">
                <video
                  autoPlay
                  muted
                  loop
                  src={royal}
                  className="rounded shadow-lg hover:scale-110 transition-all"
                ></video>
              </a>
              <div className="text">
                <h1 className="text-2xl tracking-tighter text-white leading-6 mt-5 mb-3">
                  Technologies Used:-
                </h1>
                {["HTML", "CSS", "JavaScript"].map((item, index) => (
                  <li className="text-white">{item}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
