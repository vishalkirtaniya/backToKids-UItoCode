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
      <div className="h-[619px] w-full mt-[64px] ">
        {/* card no. 1 */}
        <div className="h-[150px] w-full  flex justify-between items-center p-[32px] ">
          <div className="h-[86px] w-[367px]  flex justify-between  ">
            <div className="h-full w-[86px] rounded-[6px] flex justify-center items-center bg-limeGreen ">
            
              <Image
                src={"/homepage/image 4.png"}
                height={46}
                width={46}
                alt="1st employers logo"
              />
            </div>
            <div className="h-[68px] w-[261px] flex flex-col justify-between ">
              <div className="h-[32px] w-[235px] flex justify-between items-center  gap-3">
                <h2 className="text-[20px] font-[500] leading-[32px] montserratFont text-nowrap ">
                  Garba Dancers
                </h2>
                <div className="badge h-[26px] w-[151px] rounded-full flex justify-center items-center montserratFont text-[14px] leading-[20px] text-white bg-customRed ">
                  Dancer
                </div>
              </div>
              <div className="h-[22px] w-[261px] flex justify-between  ">
                <div className="h-[22px] w-[88px] flex ">
                  <Image
                    src={"/homepage/location.png"}
                    height={20}
                    width={20}
                    alt="location"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    Mumbai
                  </h3>
                </div>
                <div className="h-[22px] w-[221px] flex justify-end">
                  <Image
                    src={"/homepage/date.png"}
                    height={20}
                    width={20}
                    alt="date"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    6 Days Remaining
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] w-[244px] flex  ">
            <div className="h-full w-[48px] flex justify-center items-centerborder border-black ">
              <Image className="" src={"/homepage/iconButton.svg"} height={24} width={24} alt="iconbutton" />  
            </div>
            <div className="h-full w-[184px] rounded-[3px] bg-customRed flex justify-center items-center"><h1 className="montserratFont text-[16px] leading-[24px] font-[600] text-white ">Apply Now</h1><Image src={"/homepage/rightArrow.svg"} height={24} width={24} /></div>  
          </div> 
        </div>
        {/* card no. 2 */}
        <div className="h-[150px] w-full  flex justify-between items-center p-[32px] ">
          <div className="h-[86px] w-[402px]  flex justify-between ">
            <div className="h-full w-[86px] rounded-[6px] flex justify-center items-center bg-black">
              <Image
                src={"/homepage/image 5.png"}
                height={49}
                width={49}
                alt="1st employers logo"
              />
            </div>
            <div className="h-[68px] w-[296px] flex flex-col justify-between k ">
              <div className="h-[32px] w-[296px] flex justify-between items-center gap-3 ">
                <h2 className="text-[20px] font-[500] leading-[32px] montserratFont text-nowrap ">
                  Clothing Commercial
                </h2>
                <div className="badge h-[26px] w-[71px] rounded-full flex justify-center items-center montserratFont text-[14px] leading-[20px] text-white bg-customRed ">
                  Acting
                </div>
              </div>
              <div className="h-[22px] w-[261px] flex justify-between  ">
                <div className="h-[22px] w-[88px] flex ">
                  <Image
                    src={"/homepage/location.png"}
                    height={20}
                    width={20}
                    alt="location"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    Delhi
                  </h3>
                </div>
                <div className="h-[22px] w-[221px] flex justify-end">
                  <Image
                    src={"/homepage/date.png"}
                    height={20}
                    width={20}
                    alt="date"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    4 Days Remaining
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] w-[244px] flex  ">
            <div className="h-full w-[48px] flex justify-center items-centerborder border-black ">
              <Image className="" src={"/homepage/iconButton.svg"} height={24} width={24} alt="iconbutton" />  
            </div>
            <div className="h-full w-[184px] rounded-[3px] bg-customRed flex justify-center items-center"><h1 className="montserratFont text-[16px] leading-[24px] font-[600] text-white ">Apply Now</h1><Image src={"/homepage/rightArrow.svg"} height={24} width={24} /></div>  
          </div> 
        </div>
        {/* card no. 3 */}
        <div className="h-[150px] w-full  flex justify-between items-center p-[32px] ">
          <div className="h-[86px] w-[468px]  flex justify-between  ">
            <div className="h-full w-[86px] rounded-[6px]  ">
              <Image
                src={"/homepage/Employers Logo2.png"}
                height={86}
                width={86}
                alt="1st employers logo"
              />
            </div>
            <div className="h-[68px] w-[362px] flex flex-col justify-between  ">
              <div className="h-[32px] w-[362px] flex justify-between items-center ">
                <h2 className="text-[20px] font-[500] leading-[32px] montserratFont  ">
                  Model for Kids Bag Brand
                </h2>
                <div className="badge h-[26px] w-[95px] rounded-full flex justify-center items-center montserratFont text-[14px] leading-[20px] text-white bg-customRed ">
                  Modeling
                </div>
              </div>
              <div className="h-[22px] w-[261px] flex justify-between  ">
                <div className="h-[22px] w-[88px] flex ">
                  <Image
                    src={"/homepage/location.png"}
                    height={20}
                    width={20}
                    alt="location"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    Pune
                  </h3>
                </div>
                <div className="h-[22px] w-[221px] flex justify-end">
                  <Image
                    src={"/homepage/date.png"}
                    height={20}
                    width={20}
                    alt="date"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    4 Days Remaining
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] w-[244px] flex  ">
            <div className="h-full w-[48px] flex justify-center items-centerborder border-black ">
              <Image className="" src={"/homepage/iconButton.svg"} height={24} width={24} alt="iconbutton" />  
            </div>
            <div className="h-full w-[184px] rounded-[3px] bg-customRed flex justify-center items-center"><h1 className="montserratFont text-[16px] leading-[24px] font-[600] text-white ">Apply Now</h1><Image src={"/homepage/rightArrow.svg"} height={24} width={24} /></div>  
          </div> 
        </div>
        {/* card no. 4 */}
        <div className="h-[150px] w-full  flex justify-between items-center p-[32px] ">
          <div className="h-[86px] w-[367px]  flex justify-between  ">
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
                    height={20}
                    width={20}
                    alt="location"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    Mumbai
                  </h3>
                </div>
                <div className="h-[22px] w-[221px] flex justify-end">
                  <Image
                    src={"/homepage/date.png"}
                    height={20}
                    width={20}
                    alt="date"
                  />
                  <h3 className="text-lightGrey text-[14px] leading-[20px] montserratFont ">
                    4 Days Remaining
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] w-[244px] flex  ">
            <div className="h-full w-[48px] flex justify-center items-centerborder border-black ">
              <Image className="" src={"/homepage/iconButton.svg"} height={24} width={24} alt="iconbutton" />  
            </div>
            <div className="h-full w-[184px] rounded-[3px] bg-customRed flex justify-center items-center"><h1 className="montserratFont text-[16px] leading-[24px] font-[600] text-white ">Apply Now</h1><Image src={"/homepage/rightArrow.svg"} height={24} width={24} /></div>  
          </div> 
        </div>
      </div>

      {/* fifth Section */}
      <div className="h-[218px] w-full mt-[86px] bg-gradient-to-r from-[#010610] to-[#555658] rounded-[12px] flex items-center justify-center gap-3 ">
        <h1 className="text-[22px] leading-[26.82px] montserratFont text-white w-[781px] font-[400] ">Connect, collaborate, and grow with fellow actors, models, and creatives. Share insights, spark discussions, and forge valuable connections in our network. Elevate your craft and expand your horizons with like-minded artists today!</h1>
        <div className="h-[44px] w-[322px] bg-gradient-to-r from-[#bb362a] to-[#f45143] flex justify-center items-center text-[28px] leading-[34.13px] montserratFont font-[500] drop-shadow-qw rounded-[12px] text-white">Join our Community</div>
      </div>

      {/* sixth Section */}
      <div className="mt-[73px] h-[47px] w-full flex justify-between">
        <h1 className="text-customRed monsterratFont text-[34px] leading-[41.45px] ">Need talent for your project? We've got you covered.</h1>
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

      {/* seveth Section */}
      <div className="mt-[60px] h-[284px] w-full flex justify-between">
        {/* card 1 */}
        <div className="h-full w-[330px] bg-lightgreygradient rounded-[12px] relative overflow-hidden ">
          <div className="absolute h-full w-full ">
            <Image className="ml-[100px]" src={"/homepage/file (2) 1.png"} height={284} width={232} alt="first child"  />
          </div>
          <div className="absolute h-full w-full">

          <h1 className="m-[17px] text-[30px] leading-[36.57px] monsterratFont font-[500] text-white">Actors</h1>
          </div>
        </div>
        {/* card 2 */}
        <div className="h-full w-[330px] bg-lightgreygradient rounded-[12px] relative overflow-hidden ">
          <div className="absolute h-full w-full ">
            <Image className="ml-[120px]" src={"/homepage/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept 1.png"} height={291} width={257} alt="second child"  />
          </div>
          <div className="absolute h-full w-full">

          <h1 className="m-[17px] text-[30px] leading-[36.57px] monsterratFont font-[500] text-white">Models</h1>
          </div>
        </div>
        {/* card 3 */}
        <div className="h-full w-[330px] bg-lightgreygradient rounded-[12px] relative overflow-hidden ">
          <div className="absolute h-full w-full ">
            <Image className="ml-[135px]" src={"/homepage/adorable-cute-child-with-microphone-hands-singing-songs-looks-camera-performing-isolated-yellow-background-child-arranging-concert-sings-karaoke 1.png"} height={280} width={209} alt="third child"  />
          </div>
          <div className="absolute h-full w-full">

          <h1 className="m-[17px] text-[30px] leading-[36.57px] monsterratFont font-[500] text-white w-[145px]">Voiceover Artists</h1>
          </div>
        </div>
      </div>

      {/* eighth Section */}
      <div className="h-[218px] w-full mt-[123px] mb-[148px] bg-gradient-to-r from-[#010610] to-[#555658] rounded-[12px] flex items-center justify-center gap-3 ">
        <h1 className="text-[22px] leading-[26.82px] montserratFont text-white w-[781px] font-[400] ">Explore a world of talent for your project! From actors to models, voice-over artists, freelancers, and crew members, find your perfect fit to bring your project to life with flair and finesse.</h1>
        <div className="h-[44px] w-[280px] bg-gradient-to-r from-[#bb362a] to-[#f45143] flex justify-center items-center text-[28px] leading-[34.13px] montserratFont font-[500] drop-shadow-qw rounded-[12px] text-white">Post a Job</div>
      </div>
    </div>
  );
};

export default LandingPage;
