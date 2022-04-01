import React from 'react'

const Transaction = () => {
    return (
        <div className="">
            <div>
                <h1 className="mb-4">All Transactions</h1>
            </div>
            <div className="w-full h-[530px] flex flex-col gap-4 overflow-y-scroll">
                {
                    [1,2,3,4,5,6].map((item, index) => (
                        <div key={index} className="bg-white shrink-0 h-24 w-full rounded">
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Transaction