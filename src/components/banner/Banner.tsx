import { ImageBanner } from "../../assets/images";
import Dots from "../dots/Dots";

export default function Banner() {
  return (
    <div className="bg-gray-100 lg:h-[88vh] relative flex flex-row w-full py-14 sm:py-28 lg:px-[9vw] sm:px-[8vw] px-[15vw] sm:justify-between justify-center items-center gap-4">
      <div className="max-w-3xl sm:text-start text-center flex flex-col gap-7">
        <h1 className="text-balance text-gray2 font-semibold tracking-wide sm:text-[4.6vw] text-[5.9vw] leading-snug sm:leading-none">
          Lessons e insights{" "}
          <span className="text-green block">de 8 anos</span>
        </h1>
        <p className="text-pretty text-gray2 font-light lg:text-[1.3vw] text-[3vw] sm:text-[1.5vw]">
          Onde expandir seu negócio como fotógrafo: site ou mídia social?
        </p>
        <div className="flex justify-center sm:justify-start items-center gap-x-6">
          <a className="lg:text-[1.1vw] md:text-[1.5vw] sm:text-[1.7vw] rounded-md bg-green lg:py-4 lg:px-8 py-3 px-4 text-sm font-semibold text-white shadow-sm">
            Registrar-se
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
