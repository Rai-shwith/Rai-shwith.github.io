import React from "react";
import Github from "./icons/Github";
import Home from "./icons/Home";
import LinkedIn from "./icons/LinkedIn";
import ToggleDark from "./icons/ToggleDark";
import ToggleLight from "./icons/ToggleLight";
import { useTheme } from "../context/ThemeContext";
import Telegram from "./icons/Telegram";

const FloatingBar = () => {

  const {toggleTheme} = useTheme()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 ">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Home"
            data-state="closed"
            href="/"
          >
            <Home />
          </a>
        </div>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
          mousex="[object Object]"
          magnification="60"
          distance="140"
        ></div>
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="GitHub"
            data-state="closed"
            href="https://github.com/Rai-shwith"
          >
            <Github />
          </a>
        </div>
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="LinkedIn"
            data-state="closed"
            href="https://www.linkedin.com/in/ashwith-rai"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="X"
            data-state="closed"
            href=""
            // TODO: Whatsapp icon
          ></a>
        </div>
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Youtube"
            data-state="closed"
            href=""
          >
            <Telegram />
          </a>
        </div>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full py-2"
          mousex="[object Object]"
          magnification="60"
          distance="140"
        ></div>
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2"
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            < ToggleDark />
           < ToggleLight />

          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingBar;
