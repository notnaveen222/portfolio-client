import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".footer",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <div className="">
      <div className="footer relative -top-2 z-50 pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-10 mx-auto  max-w-[90%] rounded-3xl bg-[#141414] ">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:flex-rows sm:gap-0">
          <div>
            <div className="text-xl font-semibold text-white font-interT">
              Naveen K.M
            </div>
            <div className="text-lg w-2/3 font-semibold text-graya1  font-interT underline-offset-[7px] ">
              I don't just build websites. I engineer experiences that leave a
              mark.
            </div>
          </div>
          <div>
            <div className="font-interT">
              <div className="text-xl font-semibold text-graya1">Connect</div>
              <div className="cursor-pointer flex items-center text-lg font-semibold text-white gap font-interT">
                Instagram
              </div>
              <div className="cursor-pointer flex items-center text-lg font-semibold text-white gap font-interT">
                {" "}
                Twitter
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5 mt-16 border-t">
          <div className="text-white font-interT">
            <div className="inline mr-1">© 2025</div>
            {/* <div className="inline">Naveen K.M</div> */}
          </div>
          <div className="flex flex-wrap items-center text-right text-white font-interT">
            naveenkm.in #a6cca62
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
{
  /* <div className="flex flex-col gap-[10px] text-base font-semibold leading-4 sm:flex-row text-graya1">
          <div>2024 ©</div>
          <div>Naveen K.M</div>
        </div>
        <div className="flex flex-col items-end text-lg font-semibold text-white cursor-pointer sm:items-center sm:flex-row">
          <div className="flex items-center gap-1 leading-4 align-top">
            <TbBrandGithub />
            naveenkm.in
          </div>
          <span className="underline select-none text-graya1">#a6cca62</span>
        </div> */
}
