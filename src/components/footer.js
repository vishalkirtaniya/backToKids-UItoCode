import Image from "next/image";

const Footer = () => {
    return (
        <div className="h-[590px] w-full border border-black relative bg-footer bg-cover bg-no-repeat  bg-black py-[50px] px-[100px] flex flex-col justify-between">
            <div className="h-[480px] w-full  flex justify-start ">
            <div className="h-full w-[380px]  ">
                <h1 className="text-[26px] leading-[31.69px] text-customRed font-[500] montserratFont mb-[22px]">Company</h1>
                <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">About Us</h3>
                <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Our Team</h3>
                <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Partners</h3>
                <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">How we work</h3>
                <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Contact Us</h3>
            </div>
            <div className="h-full w-[380px]  ">
            <h1 className="text-[26px] leading-[31.69px] text-customRed font-[500] montserratFont mb-[22px]">Artists and Recruiters</h1>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Casting Calls</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Join our Community</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Agencies</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Poplar Auditions</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Post a Job</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Find Talents</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Partners</h3>
            </div>
            <div className="h-full w-[380px]  ">
            <h1 className="text-[26px] leading-[31.69px] text-customRed font-[500] montserratFont mb-[22px]">Support</h1>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Help</h3> className=""
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Pricing</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">FAQ’s</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Contact Us</h3>
            <h3 className="montserratFont text-[22px] leading-[26.82px] text-white h-[36px] font-normal ">Privacy Policy</h3>
            </div>
            </div>
            <div className="h-[27px] w-full  flex justify-start gap-3 ">
                <h1 className="montserratFont font-normal text-[22px] leading-[26.82px] text-customRed ">Connect with us</h1>
                <div className="socialMediaButtons flex justify-start h-full w-[200px]   ">
                    <Image className="" src={"/homepage/Instagram.png"} height={24} width={26} alt="insta button"  />
                    <Image className="" src={"/homepage/TwitterX.png"} height={22} width={24} alt="twitter button"  />
                    <Image className="" src={"/homepage/Facebook.png"} height={24} width={24} alt="fb button"  />
                    <Image className="" src={"/homepage/YouTube.png"} height={27} width={27} alt="youtube button"  />
                </div>
            </div>
        </div>
    )
}
 export default Footer;