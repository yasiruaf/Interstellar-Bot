"use client";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-black/20 w-full fixed top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="md:flex hidden justify-between items-center h-[100px] text-white container mx-auto">
        <div className="flex items-center">
          <Image src="/Images/logo.svg" alt="Logo" width={400} height={100} />
        </div>
        <div className="flex items-center space-x-8">
          <Link href="#BuyBot">Buy Bot</Link>
          <Link href="#TrendingBot">Trending Bot</Link>
          <Link href="#SuperBot">Super Bot</Link>
          <Link href="#Roadmap">Roadmap</Link>
          <Link href="#FAQs">FAQs</Link>
        </div>
        <div className="mr-12">
          <button
            type="button"
            className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold -tracking-tighter text-white"
          >
            Burn
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center justify-between h-[100px] bg-[#130f14] text-white relative">
        <div className="">
          <Image src="/Images/logo.svg" alt="Logo" width={250} height={50} />
        </div>
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger
            className="focus:outline-none mr-5"
            onClick={toggleMenu}
          >
            <div className="p-[2px] rounded-full bg-gradient-to-b from-[#34DDFF] to-[#4E9EFF]">
              <div className="bg-[#130f14] rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      stroke="url(#icon-gradient)"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="url(#icon-gradient)"
                    />
                  )}
                  <defs>
                    <linearGradient
                      id="icon-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#34DDFF" />
                      <stop offset="100%" stopColor="#4E9EFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className={`bg-[#120E11] text-white text-2xl mt-2 space-y-2 text-center w-screen h-screen rounded-md shadow-md p-2 transition-transform linear duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <DropdownMenu.Item className="p-2">
              <Link href="#BuyBot" className="block">
                Buy Bot
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2">
              <Link href="#TrendingBot" className="block">
                Trending Bot
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2">
              <Link href="#SuperBot" className="block">
                Super Bot
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2">
              <Link href="#Roadmap" className="block">
                Roadmap
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2">
              <Link href="#FAQs" className="block">
                FAQs
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </section>
  );
};

export default Header;
