import Link from "next/link";
import { getCurrentYear } from "@/lib/utils";

// ICONS
import { FaYoutube, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="bg-black/90 text-white h-[300px] px-5 flex flex-col justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-[1300px] max-sm:flex-col max-sm:gap-5">
        <div>
          {/* <img src={logo} /> */}
          <Link href="/">
            <h2 className="text-3xl">Amidarh</h2>
          </Link>
        </div>
        <div className="flex flex-row gap-3 ">
          <Link href="##" className="nav_link">
            <p className="">About Us</p>
          </Link>
          <Link href="##" className="nav_link">
            <p className="">Blog</p>
          </Link>
          <Link href="##" className="nav_link">
            <p className="">Contact Us</p>
          </Link>
        </div>
        <div className=" text-xl flex flex-row gap-3">
          <Link href="##" className="nav_link">
            <FaYoutube color="white"/>
          </Link>
          <Link href="##" className="nav_link">
            <FaWhatsapp color="white"/>
          </Link>
          <Link href="##" className="nav_link">
            <FaTwitter color="white"/>
          </Link>
          <Link href="##" className="nav_link">
            <FaLinkedin color="white"/>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-light-gray2 mt-8">© Amidarh {getCurrentYear()}</p>
      </div>
      {/* <h2>Ths Footer</h2> */}
    </div>
  );
};
