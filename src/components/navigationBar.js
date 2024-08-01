import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="h-20 bg-black  w-full flex justify-center items-center montserratFont">
      <div className="h-[50px] w-[1440px]  flex justify-between items-center ">
        <div className="h-[34px] w-[210px]  ">
          <Image
            src="/homepage/Straight logo 1.png"
            height={50}
            width={200}
            alt="logo "
          ></Image>
        </div>

        <nav className="h-full w-[1000px] navButtons  gap-[50px] flex justify-between items-center text-white font-[500] text-[16px] ">
          <Link href={"/"}>Home</Link>
          <Link href={"/findjob"}>Find Job</Link>
          <Link href={"#"}>Fing Talent</Link>
          <Link href={"#"}>Post a job</Link>
          <Link href={"#"}>Shortlist</Link>
          <Link href={"#"}>Community</Link>
          <Link
            href={"/login"}
            className="h-[49px] w-[147px] flex justify-center items-center bg-customRed rounded-full "
          >
            Login/Signup
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
