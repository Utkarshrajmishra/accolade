import Marquee from "react-fast-marquee";
import { BsAmazon, BsGoogle, BsMicrosoft, BsFacebook } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { FaLinkedin, FaSpotify, FaSalesforce, } from "react-icons/fa";
import { PiPaypalLogo } from "react-icons/pi";
import { SiAdobe, SiIntuit } from "react-icons/si";

const comapines = [
  { id: 1, logo: <BsGoogle fontSize={50} /> },
  { id: 2, logo: <BsMicrosoft fontSize={50} /> },
  { id: 3, logo: <BsAmazon fontSize={50} /> },
  { id: 4, logo: <PiPaypalLogo fontSize={50} /> },
  { id: 5, logo: <SiAdobe fontSize={50} /> },
  { id: 6, logo: <BsFacebook fontSize={50} /> },
  { id: 7, logo: <FaAws fontSize={50} /> },
  { id: 8, logo: <FaLinkedin fontSize={50} /> },
  { id: 9, logo: <SiIntuit fontSize={50} /> },
  { id: 10, logo: <FaSalesforce fontSize={50} /> },
  { id: 11, logo: <FaSpotify fontSize={50} /> },
];

export function MarqueeComp() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {comapines.map((review) => (
          <div key={review.id} className="mx-10">
            {review.logo}
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
