import { Carousel } from "flowbite-react";
import { Client1, Client2, Client3, Client4, Client5, Client6 } from "../../assets/images";

export const CarouselClients = () => {
  return (
    <div className="h-64 w-full">
      <Carousel
        slideInterval={3000}
        className="border border-solid border-red-500"
      >
        <img className="w-full h-full object-contain" src={Client1} alt="Client 1" />
        <img className="w-full h-full object-contain" src={Client2} alt="Client 2" />
        <img className="w-full h-full object-contain" src={Client3} alt="Client 3" />
        <img className="w-full h-full object-contain" src={Client4} alt="Client 4" />
        <img className="w-full h-full object-contain" src={Client5} alt="Client 5" />
        <img className="w-full h-full object-contain" src={Client6} alt="Client 6" />
        <img className="w-full h-full object-contain" src={Client1} alt="Client 7" />
      </Carousel>
    </div>
  );
};
