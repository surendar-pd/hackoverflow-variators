import React, { useEffect } from "react";
import { useRouter } from "next/router";
import balanceSvg from "../../assets/balancw.svg";
import Image from "next/image";
import { db, onSnapshot, doc, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import walletSvg from "../../assets/wallet.svg";

const Dashboard = ({ currentUser }) => {
  const [user] = useAuthState(auth);

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  };

  const current = new Date();
  current.setMonth(current.getMonth() - 1);
  const previousMonth = current.toLocaleString("default", { month: "long" });

  return (
    <>
      <div>
        <h1 className="text-2xl">
          Hi <span className="font-bold">{user?.displayName}</span>
        </h1>
      </div>
      <div className="w-full h-3/4 flex justify-center items-center">
        <div className="w-full py-2 h-fit flex gap-4 overflow-x-scroll snap-x">
          <div className="w-64 h-80 p-4 bg-white shrink-0 rounded-lg shadow-md snap-center">
            <h1>Current Balance</h1>
            <h1 className="font-bold text-xl">
              {toIndianCurrency(parseInt(currentUser?.balance))}
            </h1>
            <div className="flex justify-center items-center">
              <Image width={200} height={200} src={balanceSvg} alt="balance" />
            </div>
          </div>
          <div className="w-64 h-80 p-4 bg-white shrink-0 rounded-lg shadow-md snap-center">
            <h1>This Month Spends</h1>
            <h1 className="font-bold text-xl">
              {/* {toIndianCurrency(parseInt(currentUser?.balance))} */}
              {toIndianCurrency(0)}
            </h1>
            <div className="flex justify-center items-center">
              <Image width={175} height={175} src={walletSvg} alt="wallet" />
            </div>
            <div className="flex  mt-8 justify-between items-center">
              <div>
                <h1 className="font-semibold">{toIndianCurrency(250)}</h1>
                <h1 className="text-xs">Dues for {previousMonth}</h1>
              </div>
              <div>
                <h1 className="text-sm bg-[#008037] py-1 px-2 text-white rounded">
                  Repay Now
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
