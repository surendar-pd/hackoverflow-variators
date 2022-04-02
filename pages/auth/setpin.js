import React, { useState } from 'react'
import Image from 'next/image';
import pinSvg from '../../assets/pin.svg';
import toast,{Toaster} from "react-hot-toast"
import {useRouter} from "next/router"


const Setpin = () => {
    const router = useRouter();

    const [pin, setPin] = useState();

    const setpin = () => {
        if(pin.length < 4 || pin.length > 4){
            toast.error("Invalid Pin");
        }else{
            router.replace("/home/paymentSuccess");
        }
    }



    return (
        <div className="w-full h-screen p-4 flex flex-col gap-4 justify-center items-center">
            <Toaster />
            <div>
                <Image src={pinSvg} alt={"pin"} />
            </div>
            <div>
                <div>
                    <h1 className="font-semibold">Enter your 4 Digit PIN</h1>
                </div>
                <div className="">
                    <input
                        onChange={(e) => setPin(e.target.value)}
                        type="number" 
                        className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                        onClick={setpin}
                        type="submit"
                        className={`bg-[#008037] mt-4 h-12 w-full rounded focus:border-[#008037] cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2`}
                    >
                        <span className="font-light">Pay</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Setpin