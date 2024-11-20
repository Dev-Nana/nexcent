import React from "react";
import { CarouselClients } from "../carousel/Carousel";

export default function Clients() {
  return (
    <div>
      <div className="flex flex-col items-center py-12">
        <h1 className="text-balance text-gray2 font-semibold tracking-wide sm:text-[2.8vw] text-[4vw] leading-snug sm:leading-none">
          Nossos Clientes
        </h1>
        <p className="text-pretty text-gray2 font-light lg:text-[1.3vw] text-[3vw] sm:text-[1.5vw]">
          Temos trabalhado com alguns clientes da Fortune 500+
        </p>
      </div>
      <CarouselClients />
    </div>
  );
}
