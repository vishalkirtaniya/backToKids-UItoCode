import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-[1233px] mx-auto">
      {/* first Section done */}
      <div className="h-[340px] w-full  flex justify-between mt-[127px]">
        <div className="h-full w-[634px]  flex flex-col">
          <h1 className="text-customRed coolveticaFont text-[40px] leading-[48px] ">
            Casting the Starts of Tomorrow
          </h1>
          <p className="montserratFont text-[26px] leading-[31.69px] mt-[20px] ">
            At Book My Kids, we discover and nurture young talent, connecting
            aspiring actors and models with opportunities to shine.
          </p>
          <div className="h-[61px] w-[290px] rounded-[12px] flex justify-center items-center bg-customRed mt-[71px]">
            <h1 className="font-[600] text-[28px] leading-[34.13px] text-white montserratFont ">
              Join Now
            </h1>
          </div>
        </div>
        <div className="heroImageContainer h-full w-[510px]  rounded-[12px] overflow-hidden ">
          <Image
            src={
              "/homepage/surprised-girl-standing-front-stage-light-holding-scripts 1.png"
            }
            height={340}
            width={510}
            alt="hero Image"
          />
        </div>
      </div>

      {/* second Section */}
      <div className=" mt-[202px] w-full h-[220px] flex flex-col justify-between ">
        <h1 className="montserratFont text-[40px] leading-[48.76px] font-[500] text-customRed ">
          Join Bookmykids and start your journey to stardom
        </h1>
        <p className="montserratFont text-[22px] leading-[26.82px] w-[1120px] font-normal  ">
          Book My Kids is your premier casting platform dedicated to discovering
          and nurturing young talent. We connect aspiring child actors, models,
          and performers with top-tier auditions and casting opportunities in
          the entertainment industry. Our expert team ensures a seamless process
          from talent discovery to stardom, providing the support and resources
          needed for your child to shine. Join Book My Kids today and watch your
          child's dreams come to life on the big stage.
        </p>
      </div>

      {/* third Section */}
      <div className=" mt-[119px] h-[48px] w-full flex justify-between items-center">
        <h1 className="text-[40px] leading-[48px]   montserratFont font-[500]  text-customRed">
          Featured job
        </h1>
        <div className="viewAllButton h-full w-[151px] flex justify-center  items-center border-[1px] border-customGrey rounded-[1px] ">
          <h3 className="text-customRed montserratFont font-[600] text-[16px] ">
            View All
          </h3>
          <Image
            src={"/homepage/Screenshot from 2024-07-30 13-41-46.png"}
            width={24}
            height={24}
            alt="arrow"
          />
        </div>
      </div>

      {/* fourth Section */}
      <div className="h-[619px] w-full mt-[64px] border border-black ">
        <div className="h-[150px] w-full border border-black flex justify-between items-center p-[32px] ">
          <div className="h-[86px] w-[367px] border border-black flex justify-between">
            <div className="h-full w-[86px] rounded-[6px]  ">
              <Image
                src={"/homepage/Employers Logo.png"}
                height={86}
                width={86}
                alt="1st employers logo"
              />
            </div>
            <div className="h-[68px] w-[261px] flex flex-col justify-between ">
              <div className="h-[32px] w-[171px] flex justify-between items-center ">
                <h2 className="text-[20px] font-[500] leading-[32px] montserratFont  ">
                  TV Series
                </h2>
                <div className="badge h-[26px] w-[71px] rounded-full flex justify-center items-center montserratFont text-[14px] leading-[20px] text-white bg-customRed ">
                  Acting
                </div>
              </div>
              <div className="h-[22px] w-[261px] flex justify-between  ">
                <div className="h-[22px] w-[88px] flex ">
                  <Image
                    src={"/homepage/location.png"}
                    height={22}
                    width={22}
                    alt="location"
                  />
                  <h3 className="text-lightGrey text-[12px] leading-[20px] montserratFont ">
                    Mumbai
                  </h3>
                </div>
                <div className="h-[22px] w-[221px] flex ">
                  <Image
                    src={"/homepage/date.png"}
                    height={22}
                    width={22}
                    alt="date"
                  />
                  <h3 className="text-lightGrey text-[12px] leading-[20px] montserratFont ">
                    4 Days Remaining{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
