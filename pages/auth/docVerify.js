import React,{useEffect, useState} from 'react'
import Image from "next/image"
import pendingSvg from "../../assets/pending.svg";
import { InfinitySpin } from 'react-loader-spinner'
import {useRouter} from 'next/router'

const DocVerify = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace("/home")
        },6000)
    })
    return (
        <div className="w-full h-screen p-4">
            <div className="w-full h-1/2 flex justify-center items-center">
                <Image width={250} height={250} src={pendingSvg} alt="pending" />
            </div>
            <div className="w-full h-1/2 flex flex-col items-center justify-center">
            <InfinitySpin color="green" />
                <h1 className="text-lg font-semibold">We are on it!</h1>
                <h1 className="text-md text-center my-2">It may take upto 48 hours to complete the verification process</h1>
            </div>
        </div>
    )
}

export default DocVerify