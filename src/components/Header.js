import React from "react";
import useTheme from "../hooks/useTheme";
import { ReactComponent as CloudMoon } from "../assets/icons/cloud-moon.svg";
import { ReactComponent as CloudMoonFill } from "../assets/icons/cloud-moon-fill.svg";

export default function Header() {
  const [colorTheme, setTheme] = useTheme();
  return (
    <div className="bg-terang-primary dark:bg-gelap-primary py-3  shadow-lg">
      <div className="container mx-auto px-5 lg:px-32 flex flex-row justify-between items-center text-white">
        {/* <div className="rounded-full p-3 w-12 h-12 bg-gelap-third text-center ">
          RA
        </div> */}
        <div className="font-semibold text-gelap-third dark:text-terang-third">
          Rahulsya.
        </div>
        <div className="flex pointer" onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" && (
            <CloudMoon className="animate-bounce h-8 w-8" />
          )}
          {colorTheme === "dark" && (
            <CloudMoonFill className="animate-bounce h-8 w-8 text-gelap-secondary" />
          )}
        </div>
      </div>
    </div>
  );
}
