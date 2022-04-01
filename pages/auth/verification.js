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
        if(user?.emailVerified) {
            router.push('/auth/docUpload')
        }
    },[])

    return (
        <div className="w-full h-screen p-4">
            <div className="w-full h-1/2 flex justify-center items-center">
                <Image src={VerifySVG} alt={'VerifySVG'} width={250} height={250}/>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
                <h1 className="text-sm">An verification email has been sent to {user?.email}</h1>
                <h1 className='my-4 bg-[#ffc10760] w-full py-2 rounded text-[#ffc107] text-center text-sm'>Please verify your email</h1>
            </div>
        </div>
    )
}

export default Verification