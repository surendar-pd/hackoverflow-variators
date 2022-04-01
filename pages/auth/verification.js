import React, { useEffect, useState } from 'react'
import VerifySVG from "../../assets/verification.svg"
import Image from "next/image"
import { auth } from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
import {
    Toaster, toast} from "react-hot-toast"


const Verification = () => {
    const [isVerified, setIsVerified] = useState()
    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        console.log(user?.emailVerified)
    },[user])

    const checkIfVerified = () => {
        if(user?.emailVerified) {
            router.replace('/auth/docUpload')
        }
        else{
            toast.error("Please verify your email")
            setTimeout(() => {
                router.reload()
            },5000)
        }
    }
    

    return (
        <div className="w-full h-screen p-4">
            <Toaster position="top-left" />
            <div className="w-full h-1/2 flex justify-center items-center">
                <Image src={VerifySVG} alt={'VerifySVG'} width={250} height={250}/>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <h1 className="text-sm">An verification email has been sent to {user?.email}</h1>
                {/* {
                    isVerified?
                    <h1 className='mt-4 bg-[#ffc10760] w-full flex justify-center items-center rounded text-[#ffc107] text-center text-sm h-12'>Please verify your email</h1>
                    :""
                } */}
            <button
                type="submit"
                onClick={checkIfVerified}
                className={`bg-[#008037] w-full h-12 rounded focus:border-[#008037] cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 my-2`}
            ><span className="text-sm">Next</span></button>
            </div>
        </div>
    )
}

export default Verification