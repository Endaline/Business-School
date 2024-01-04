"use client";
import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Sidebar1 from "./sidebar1";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function Navbar1() {
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <div className="bg-image1 h-screen w-full py-4 bg-no-repeat bg-cover">
      <div className=" ease-in duration-300">
        {showSideBar && (
          <Sidebar1 showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        )}
      </div>
      <nav className="bg-white lg:w-3/4 w-full  h-20 mx-auto text-black flex justify-between text-xl px-4 items-center font-light z-0  shadow-2xl  ">
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
  );
}
