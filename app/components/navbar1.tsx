"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Sidebar1 from "./sidebar1";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function Navbar1() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      content: "How are you",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      content: "How are you",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <div>
      <div className="ease-in duration-300">
        {showSideBar && (
          <Sidebar1 showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        )}
      </div>
      <div className="h-screen w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <div className="py-8">
            <nav className="bg-white lg:w-3/4 w-full   h-20 mx-auto text-black flex justify-between text-xl px-4 items-center font-light z-0  shadow-2xl  ">
              <Link href="/">
                <Image
                  src="/images/Businesslogo.png"
                  alt="logo"
                  height={100}
                  width={30}
                  className="w-[200px] h-[50px]"></Image>
              </Link>

              <ul className="flex  items-center  py-4 space-x-16">
                <li className="bg-blue-600 hover:bg-blue-500  p-[1.7rem] text-white">
                  <Link href="/">Home </Link>
                </li>
                <li className=" hover:text-blue-500">
                  <Link href="/about">About</Link>
                </li>
                <li className=" hover:text-blue-500">
                  <Link href="/courses">Courses </Link>
                </li>
                <li className=" hover:text-blue-500">
                  <Link href="/events">Events</Link>
                </li>
                <Dropdown className="text-black">
                  <DropdownTrigger>
                    <Link href="#">Pages</Link>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <li className=" hover:text-blue-500">
                  <Link href="/contacts">Contacts</Link>
                </li>
              </ul>
              <div className="flex items-center justify-evenly space-x-4">
                <p className=" hover:text-blue-500">
                  <FiShoppingBag />
                </p>
                <p className=" hover:text-blue-500">
                  <TfiSearch />
                </p>
                <p
                  className=" hover:text-blue-500 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                  onClick={() => setShowSideBar(true)}>
                  <CiMenuFries />
                </p>
              </div>
            </nav>
          </div>
          <p>{slides[currentIndex].content}</p>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer">
                <RxDotFilled />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
