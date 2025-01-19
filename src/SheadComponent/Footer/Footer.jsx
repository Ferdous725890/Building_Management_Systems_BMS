import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="mt-10 ">
      <footer className="boxShadow rounded-xl w-full p-3 lg:p-4 relative ">
        <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
          <p className="text-white">Ferdous</p>

          <p className="text-[0.9rem] text-center sm:text-start text-gray-600">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>

          <button className="py-3 px-6 rounded-full bg-primary text-white">
            Contact Us
          </button>

          <div className="flex gap-[15px] text-black mt-4 mb-20">
            <a target="_blank" href="https://www.facebook.com/md.ferdous.hossen.786069" className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
              <CgFacebook />
            </a>
            <a target="_blank" href="https://x.com/?lang=en"   className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
              <BsTwitter />
            </a>
            <a  target="_blank" href="https://www.instagram.com/"  className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
              <BsInstagram />
            </a>
            <a  target="_blank" href="https://www.linkedin.com/"  className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
              <BsLinkedin />
            </a>
          </div>
        </div>

        <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
          <p className="text-[0.9rem] text-gray-300">
            © 2025 All Rights Reserved
          </p>

          <SlArrowUp className="p-2 rounded-full border  cursor-pointer text-[2rem] text-gray-300" />
        </div>

        <img
          src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
          alt="background/image"
          className="absolute mx-auto bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
        />
        <img
          src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
          alt="background/image"
          className="absolute mx-auto bottom-0 left-0 right-0 z-10 rounded-b-xl"
        />
      </footer>
    </div>
  );
};

export default Footer;
