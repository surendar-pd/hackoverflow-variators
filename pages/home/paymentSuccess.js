import React from 'react';
import Image from 'next/image';
import successSvg from '../../assets/success.svg'
import {useRouter} from 'next/router'

const PaymentSuccess = () => {
    const router = useRouter();
  return (
    <div className="w-full h-screen p-4">
      <div className="w-full h-3/4 flex justify-center items-center">
        <Image alt="Success" width={250} height={250} src={successSvg} />
      </div>
      <div className="w-full h-1/4 flex flex-col">
        <h1 className="text-center">Payment Successfull</h1>
        <button
          onClick={() => router.replace("/home")}
          className={`bg-[#008037] hover:shadow-lg rounded cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
        ><span className='font-normal'>Back to Home</span></button>
      </div>
    </div>
  )
}

export default PaymentSuccess