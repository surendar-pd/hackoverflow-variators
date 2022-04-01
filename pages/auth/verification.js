import React from 'react'
import VerifySVG from "../../assets/verification.svg"
import Image from "next/image"
import { auth } from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
import {
    ToastContainer, toast} from "react-hot-toast"


const verification = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();

    const isVerified = () => {
        if(user?.emailVerified) {
            router.push('/auth/docUpload')
            toast.success("You are verified")
        } else {
            toast.error("Please verify your email address")
        }
    }

    return (
    <div className="w-full h-screen p-4">
        <div className="w-full h-1/2 flex justify-center items-center">
            <Image src={VerifySVG} alt={'VerifySVG'} width={250} height={250}/>
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
            <h1 className="text-sm">An verification mail has been sent to {user?.email}</h1>
            <button
                onClick={isVerified}
                type="submit"
                className={`bg-[#008037] w-full h-12 rounded focus:border-[#008037] -lg cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
            >
                <span className="font-semibold">Next</span>
            </button>
        </div>
    </div>
  )
}

export default verification