import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3 relative">
      <div className="w-2 h-3/5 top-1/4 bottom-1/4 bg-card-foreground absolute ml-5 "></div>
      <h2 className="text-xl font-bold relative">Education</h2>
      <div className="flex flex-col space-y-5">
        <a
          className="block cursor-pointer"
          href="https://msrit.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg bg-card text-card-foreground flex items-center ">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  className="aspect-square h-full w-full object-contain"
                  alt=""
                  src="/Education/ramaiah.png"
                />
              </span>
            </div>
            <div className="flex-grow ml-4 items-center flex-col group">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    M S Ramaiah Institute of Technology Bengaluru
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
                    <div className="">2023 - 2027</div>
                    <div className="">9.6 CGPA</div>
                  </div>
                </div>
                <p className="font-sans text-xs text-muted-foreground">
                  Bachelor's Degree of Electronics and Communication (ECE)
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          className="block cursor-pointer"
          href="https://vivekanandapuc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg bg-card text-card-foreground flex items-center ">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  src="/Education/vivek.png"
                />
              </span>
            </div>
            <div className="flex-grow ml-4 items-center flex-col group">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    Vivekananda Pre University College Puttur
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
                    <div className="">2021 - 2023</div>
                    <div className="">94.8 %</div>
                  </div>
                </div>
                <p className="font-sans text-xs text-muted-foreground">
                  {/* Pre-University Education in PCMC (Physics, Chemistry, Mathematics, and Computer Science) */}
                  Pre-University Education
                </p>
              </div>
            </div>
          </div>
        </a>
        <div
          className="block cursor-pointer"
          href={null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg bg-card text-card-foreground flex items-center ">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  className="aspect-square object-cover"
                  alt="School Logo"
                  src="/Education/priyadarshini.jpg"
                />
              </span>
            </div>
            <div className="flex-grow ml-4 items-center flex-col group">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    Priyadarshini English Medium School Bettampady
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
                    <div className="">2011 - 2021</div>
                    <div className="">96.9 %</div>
                  </div>
                </div>
                <p className="font-sans text-xs text-muted-foreground">
                  Secondary Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
