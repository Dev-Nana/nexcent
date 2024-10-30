import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Logo from "../../assets/images/Logo.png";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Service", href: "#", current: false },
  { name: "Feature", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "Testimonial", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="max-w-full px-2 sm:px-8">
        <div className="relative flex h-16 items-center justify-around sm:text-sm text-xs">

          {/* Mobile menu button*/}
          <div className="items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md py-2 px-1 text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300">
              <span className="absolute -inset-0.5"/>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          {/* Mobile menu button*/}

          <div className="flex items-center lg:w-[55vw] w-[70vw] sm:w-[63vw] justify-center sm:justify-between sm:items-stretch">
            <div className="relative flex flex-shrink-0 items-center">
              <img src={Logo} className="h-4 w-auto"/>
            </div>
            <div className="hidden sm:block">
              <div className="flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`rounded-md px-[0.8vw] py-2 text-sm font-medium ${
                      item.current
                        ? "underline text-green-500"
                        : "hover:text-green-500"
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
              className="rounded-md py-2.5 px-5 m-1 text-gray-800 hover:text-white hover:bg-green-500 transition-all duration-300"
            >
              Login
            </button>
            <button
              type="button"
              className="rounded-md bg-green-500 py-2.5 px-5 m-1 text-white text-nowrap"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="rounded-md space-y-1 px-2 pb-3 pt-2 mx-6 bg-green-600 text-xs">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`block rounded-md px-3 py-2 text-white ${
                item.current
                  ? "bg-gray-900"
                  : "hover:bg-gray-900"
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
