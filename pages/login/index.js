import Image from "next/image";

const Login = () => {
    return (
        <div className="w-[1233px] mx-auto ">
            <h1 className="coolveticaFont text-[36px] text-customRed mt-[124px] ">Welcome to Book My Kids!</h1>
            <p className="mt-[13px] w-[1157px] montserratFont text-[26.4px] leading-[32.18px] text-black ">Join Book my kids to access exclusive casting opportunities, connect with industry professionals, and start your journey towards stardom. Join our community and take the first step in showcasing your talent!</p>
            <div className="border border-black mt-[124px] mb-[200px] h-[778px] w-[642px] mx-auto bg-black drop-shadow-qw rounded-[12px] ">
                <h1 className="text-[38px] montserratFont font-[500] leading-[46.32px] text-customRed text-center mt-[29px]">Signup</h1>
                <div className="w-[554px] h-[420px]  mx-auto flex flex-col ">
                    <div className="w-full h-[96px] flex flex-col justify-between ">
                        <h1 className="montserratFont text-[24px] leading-[29.26px] font-[500] text-grayish ">Email</h1>
                        <input className="w-full h-[53px] rounded-[10px] bg-white text-[#9e9e9e] px-[15px] py-[12px]  text-[20px] " type="email" required placeholder="Email" />
                    </div>
                    <div className="w-full h-[96px] flex flex-col justify-between mt-[24px] ">
                        <h1 className="montserratFont text-[24px] leading-[29.26px] font-[500] text-grayish ">Password</h1>
                        <input className="w-full h-[53px] rounded-[10px] bg-white text-[#9e9e9e] px-[15px] py-[12px] text-[20px] " type="password" required placeholder="Password" />
                    </div>
                    <div className="mt-[22px] flex">

                    <input type="checkbox" className="self-start h-[25px] w-[25px] rounded-[3px] mr-[6px]"/>
                    <h1 className="text-grayish montserratFont font-[300] text-[18px] ">Remember Me</h1>
                    </div>
                    <div className="mt-[40px]  h-[53px] w-[292px] rounded-[12px] drop-shadow-qw bg-redishgradient montserratFont text-[20px] font-[600] leading-[24.38px] flex justify-center items-center text-grayish mx-auto ">Signup</div>
                </div>
                <h1 className="text-center text-[#f5f5f5] montserratFont leading-[24.38px] font-normal ">OR</h1>
                <h2 className="montserratFont text-[20px] leading-[24.38px] text-center text-[#f5f5f5]  ">Signup With</h2>
                <div className="h-[42.4px] w-full flex justify-center gap-[1px] ">
                    <Image src={"/homepage/Facebook1.png"} height={42.4} width={42.4} alt="facebook button" />
                    <Image src={"/homepage/Google Plus.png"} height={42.4} width={42.4} alt="google button" />
                    <Image src={"/homepage/LinkedIn Circled.png"} height={42.4} width={42.4} alt="linkein button" />
                </div>
            </div>
        </div>
    )
}

export default Login;