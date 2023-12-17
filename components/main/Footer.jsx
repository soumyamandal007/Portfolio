import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {


  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[45px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaGithub />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Social Media</div>
            <Link href="https://www.instagram.com" >
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>  
            </div>
            </Link>
            <a className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTwitter />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Contact - +1669-208-2456</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Tempe, Arizona, USA</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">smanda36@asu.edu || soumya.acroy@gmail.com</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
