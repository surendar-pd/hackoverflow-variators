import React, { useEffect, useState } from 'react'
import {doc, onSnapshot, auth, db, setDoc,addDoc, collection,serverTimestamp} from '../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from 'next/router'

const Amount = ({scanedResult, setScanedResult}) => {
  const router = useRouter();

  console.log(scanedResult)

  const [user] = useAuthState(auth)
  const [payee, setPayee] = useState();
  const [payer, setPayer] = useState();
  const [amount, setAmount] = useState(0)
  const [note, setNote] = useState("");

  // console.log(amount)
  
  useEffect(() => {
    if (scanedResult) {
    onSnapshot(doc(db, "users", scanedResult), (snapshot) => {
      setPayee(snapshot.data());
    });
    }
    if (user) {
    onSnapshot(doc(db, "users", user?.uid), (snapshot) => {
      setPayer(snapshot.data());
    });
    }
  }, []);
  console.log(payee)


  const pay = () => {
    router.replace("/auth/setpin");
    setDoc(doc(db, "users", payer?.uid),{
      balance: payer.balance - parseInt(amount),
    },{merge: true}).then(() => {
      addDoc(collection(db,"users",payer?.uid, "transactions"),{
        timestamp:serverTimestamp(),
        amount: amount,
        isCredited: false,
        OppName: payee.name,
        note: note,
    
      })
    }).catch(alert)
    setDoc(doc(db, "users", payee?.uid),{
      balance: payee.balance + parseInt(amount),
    },{merge: true}).then(() => {
      addDoc(collection(db,"users",payee?.uid, "transactions"),{
        timestamp:serverTimestamp(),
        amount: amount,
        isCredited: true,
        OppName: payer.name,
        note: note

      })
    }).catch(alert)

    router.replace("/home/paymentSuccess")


  }
  return (
    <div 
    // onClick={() => setScanedResult("")} 
    className="w-full h-screen">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <div className="flex flex-col text-center">
          <h1 className="font-semibold text-lg">Paying {payee?.name || "..."}</h1>
          <h1 className="text-sm">{payee?.fedenid}</h1>
        </div>
        <div className="flex flex-col gap-4">
          <input placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} type="number" className="appearance-none border rounded w-fit py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#008037]"/>
          <input value={note} placeholder="Note" onChange={(e) => setNote(e.target.value)} type="text" className="appearance-none border rounded w-fit py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#008037]"/>
          <button 
            onClick={pay}
            className={`bg-[#008037] h-12 rounded focus:border-[#008037] -lg cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2`}
          ><span className="text-normal font-light">Next</span></button>
        </div>
      </div>
    </div>
  )
}

export default Amount