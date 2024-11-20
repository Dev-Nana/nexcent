import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Logo } from "../../assets/images";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Serviço", href: "#", current: false },
  { name: "Recurso", href: "#", current: false },
  { name: "Produto", href: "#", current: false },
  { name: "Resumo", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="bg-gray-100 max-w-full px-2 py-3 sm:px-1">
        <div className="relative flex h-[8.6vh] items-center justify-around lg:text-[1.1vw] md:text-[1.5vw] sm:text-[1.7vw] text-sm">

          {/* Mobile menu button*/}
          <div className="items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md py-2 px-1 hover:bg-green hover:text-white transition-all duration-300">
              <span className="absolute -inset-0.5"/>
              <Bars3Icon
                aria-hidden="true"
                className="block h-8 w-8 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-8 w-8 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          {/* Mobile menu button*/}

          <div className="flex items-center lg:w-[66vw] w-[76vw] sm:w-[76vw] justify-center sm:justify-between sm:items-stretch">
            <div className="relative flex flex-shrink-0 items-center">
              <img src={Logo} className="h-5 w-auto"/>
            </div>
            <div className="hidden sm:block">
              <div className="flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`rounded-md px-[1.9vw] py-2 lg:text-[1.1vw] md:text-[1.5vw] sm:text-[1.7vw]  ${
                      item.current
                        ? "text-black"
                        : "hover:text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="lg:text-[1.1vw] md:text-[1.5vw] sm:text-[1.7vw] rounded-md py-4 px-5 m-1 text-green hover:text-white hover:bg-green transition-all duration-300"
            >
              Entrar
            </button>
            <button
              type="button"
              className="lg:text-[1.1vw] md:text-[1.5vw] sm:text-[1.7vw] rounded-md bg-green lg:py-4 lg:px-5 py-3 px-4  m-1 text-white text-nowrap"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden w-full flex justify-center">
        <div className="z-10 fixed w-[90%] rounded-md space-y-1 px-2 pb-3 pt-2 bg-green">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`block rounded-md px-3 py-2 text-white ${
                item.current
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
