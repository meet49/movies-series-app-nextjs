import React from "react";
import Image from 'next/image';
import facebook from "../assets/facebook.png"
import tiwtter from "../assets/tiwtter.png"
import insta from "../assets/insta.png"
import appstore from "../assets/app.png"
import playstore from "../assets/play.png"
import micro from "../assets/microsoft.png"

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white min-h-11">
        <div className="p-7 text-gray-300">
          <ul className="flex flex-wrap sm:flex sm:flex-wrap md:flex lg:flex">
            <li>Home | </li>
            <li> Terms and Conditions | </li>
            <li> Privacy Policy | </li>
            <li> Collection Statement | </li>
            <li> Help | </li>
            <li> Manage Account | </li>
          </ul>
        </div>
        <div className="px-7 text-xs text-gray-200">
          <p>Copyright &copy; DEMO Streaming. All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap sm:flex sm:flex-wrap md:flex lg:flex justify-between p-5">
          <div className="flex flex-wrap mb-7  sm:flex sm:flex-wrap sm:mb-7 md:flex md:mb-7 lg:flex gap-4 ">
          <Image src={facebook} alt="Facebook" className="h-11"width={50}/>
          <Image src={tiwtter} alt="Tiwtter"className="h-12"width={50}/>
          <Image src={insta} alt="Instagaram"className="h-12"width={50}/>
          </div>

          <div className="flex flex-wrap sm:flex sm:flex-wrap md:flex lg:flex justify-between gap-5">
          <Image src={appstore} alt="App Store" className="h-12" width={150}/>
          <Image src={playstore} alt="Play Store" className="h-12" width={150}/>
          <Image src={micro} alt="Microsoft" className="h-12" width={150} />

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
