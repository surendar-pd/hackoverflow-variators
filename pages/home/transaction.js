import { Avatar } from '@mui/material'
import React from 'react'

const Transaction = () => {
    return (
        <div className="">
            <div>
                <h1 className="mb-4">All Transactions</h1>
            </div>
            <div className="w-full h-[530px] flex flex-col gap-4 overflow-y-scroll">
                {
                    [1,2,3].map((index) => (
                        <div key={index} className="bg-white flex justify-between items-center p-4 shrink-0 h-24 w-full rounded">
                            <div className="flex gap-2">
                                <Avatar>S</Avatar>
                                <div>
                                    <h1 className="">Prayasu</h1>
                                    <h1 className="text-sm">March 31th</h1>
                                    <h1 className="text-sm">Food</h1>
                                </div>
                            </div>
                            <div>
                                <h1>+200</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Transaction