import ImageBanner from "../../assets/images/image-banner.png";
import Dots from "../dots/Dots";

export default function Banner() {
  return (
    <div className="relative flex flex-row w-full py-14 sm:py-28 lg:px-[9vw] sm:px-[8vw] px-[15vw] sm:justify-between justify-center items-center gap-4">
      <div className="max-w-3xl sm:text-start text-center flex flex-col gap-7">
        <h1 className="text-balance font-semibold tracking-wide sm:text-[4.6vw] text-[5.9vw] leading-snug sm:leading-none">
          Lessons and insights <span className="text-green block">from 8 years</span>
        </h1>
        <p className="text-pretty lg:text-[1.3vw] text-[3vw] sm:text-[1.5vw]">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className="flex justify-center sm:justify-start items-center gap-x-6">
          <a
            className="rounded-md bg-green px-8 py-4 text-sm font-semibold text-white shadow-sm"
          >
            Register
          </a>
        </div>
      </div>
      <div className="hidden sm:block w-1/3">
        <img src={ImageBanner} />
      </div>
      <Dots />
    </div>
  );
}
