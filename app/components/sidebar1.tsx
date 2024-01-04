import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface Sidebar {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar1({ showSideBar, setShowSideBar }: Sidebar) {
  return (
    <div className="fixed right-0 h-screen lg:w-[400px] w-[300px] bg-white z-50 text-black ">
      <div className="flex justify-between">
        <h1>Get in Touch</h1>
        <p
          onClick={() => setShowSideBar(!showSideBar)}
          className="cursor-pointer">
          <LiaTimesSolid className=" text-3xl" />
        </p>
      </div>
      <p>
        If you have any questions or suggestions for our business school team,
        don `&lsquo;`t hesitate contacting us directly or via our Facebook page.
      </p>
      <p className="text-blue-600">Facebook</p>
    </div>
  );
}
