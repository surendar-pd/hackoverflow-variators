import React from 'react'

const docUpload = () => {
    return (
        <div className='w-full h-screen p-4'>
            <h1>Upload Documents</h1>
            <div className="w-full h-1/2">
                <h1>Upload Pan Card</h1>
                <div>
                </div>
            </div>
            <div className="w-full h-1/2">
                <h1>Upload Student ID Card</h1>
                <div className="w-full h-3/4 border-dashed border-2 border-[#008037] rounded">
                    <label htmlFor='profilePhoto' className='cursor-pointer absolute hover:bg-primary hover:bg-opacity-40 top-0 left-0 rounded-full w-full h-full flex items-center justify-center text-transparent hover:text-white'>upl</label>
					<input type='file' id='profilePhoto' className='w-full h-full hidden' accept='image/*' onChange={() => {}} />
                </div>
            </div>
        </div>
    )
}

export default docUpload