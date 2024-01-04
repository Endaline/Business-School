import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import Sidebar2 from "./sidebar2";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function Navbar2() {
  const [sideBar, setSideBar] = React.useState(false);
  return (
    <>
      <div className="static ease-in duration-300">
        {sideBar && <Sidebar2 sideBar={sideBar} setSideBar={setSideBar} />}
      </div>
      <nav className="bg-red-600  h-20 mx-auto text-black flex justify-between text-xl px-4 items-center font-light ">
        <Link href="/">
          <Image
            src="/images/Businesslogo.png"
            alt="logo"
            height={10}
            width={30}
            className="w-[200px]"></Image>
        </Link>

        <ul className="flex justify-around items-center space-x-8">
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/courses">Courses </Link>
          </li>
          <li>
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
            className=" hover:text-blue-500"
            onClick={() => setSideBar(!sideBar)}>
            <CiMenuFries />
          </p>
        </div>
      </nav>
    </>
  );
}
