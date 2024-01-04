"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";

export default function Navbars() {
  const pathname = usePathname();
  return <div>{pathname === "/" ? <Navbar1 /> : <Navbar2 />}</div>;
}
