import React from 'react';
import UploadSvg from "../../assets/upload.svg"
import Image from "next/image";
import {useRouter} from 'next/router';

const DocUpload = () => {
    const router = useRouter();
    return (
        <div className='w-full h-screen flex flex-col p-4'>
            <h1 className='mb-4 font-semibold'>Upload Documents</h1>
            <div className="w-full h-1/2">
                <div className="w-full h-3/4 border-dashed relative border-2 border-[#008037] border-opacity-50 rounded">
                    <label htmlFor='profilePhoto' className='cursor-pointer absolute hover:bg-primary hover:bg-opacity-40 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black hover:text-white'>
                        <Image width={150} height={150} src={UploadSvg} alt={'UploadSvg'} />
                        <h1 className='text-sm'>Upload Student Id Card</h1>
                    </label>
					<input type='file' id='profilePhoto' className='w-full h-full hidden' accept='image/*' onChange={() => {}} />
                </div>
            </div>
            <div className="w-full h-1/2">
                <div className="w-full h-3/4 border-dashed relative border-2 border-[#008037] border-opacity-50 rounded">
                    <label htmlFor='profilePhoto' className='cursor-pointer absolute hover:bg-primary hover:bg-opacity-40 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black hover:text-white'>
                        <Image width={150} height={150} src={UploadSvg} alt={'UploadSvg'} />
                        <h1 className='text-sm'>Upload Pan Card</h1>
                    </label>
					<input type='file' id='profilePhoto' className='w-full h-full hidden' accept='image/*' onChange={() => {}} />
                </div>
            </div>
            <button
                type="submit"
                onClick={() => router.push("/auth/docVerify")}
                value="Log In"
                className={`bg-[#008037] hover:shadow-lg rounded cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
            ><span className='font-normal'>Upload</span></button>
        </div>
    )
}

export default DocUpload