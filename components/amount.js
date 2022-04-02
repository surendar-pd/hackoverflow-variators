import React from 'react'
// import {collection}

const Amount = ({scanedResult, setScanedResult}) => {

  return (
    <div onClick={() => setScanedResult("")} className="w-full h-screen">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <div className="flex flex-col text-center">
          <h1 className="font-semibold text-lg">Paying Prayasu</h1>
          <h1 className="text-sm">prayasu@okfeden</h1>
        </div>
        <div>
          <input type="number" />
        </div>
      </div>
    </div>
  )
}

export default Amount