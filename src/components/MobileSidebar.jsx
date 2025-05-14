import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useAuth, useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router";
import { GoHomeFill, GoSignOut } from "react-icons/go";
import { FaRobot } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";

const MobileSidebar = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <>
      <div className="h-full md:hidden">
        <Sheet>
          <SheetTrigger>
            <IoMenu size={25} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Avatar className={"size-14"}>
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>Q</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-bold">{user?.fullName}</h1>
              <p>{user?.primaryEmailAddress.emailAddress}</p>
              <hr />
            </SheetHeader>
            <SheetDescription className={"grid grid-cols-1  sideOptions"}>
              <NavLink to={"/"}>
                <GoHomeFill size={18} /> Home
              </NavLink>
              <NavLink to={"/about"}>
                <FaRobot size={18} /> About
              </NavLink>
              <NavLink to={"/privacy-policy"}>
                <MdLockPerson size={18} />
                Privacy & policy
              </NavLink>
            </SheetDescription>
            <SheetFooter className={"px-2"}>
              <div>
                <button
                  onClick={signOut}
                  className="bg-red-50 flex items-center gap-2 px-4 py-2 w-full rounded-lg cursor-pointer"
                >
                  <GoSignOut size={18} /> Log Out
                </button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileSidebar;
