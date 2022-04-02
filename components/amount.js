import React, { useEffect, useState } from 'react'
import {doc, onSnapshot, auth, db, setDoc,addDoc, collection,serverTimestamp} from '../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";

const Amount = ({scanedResult, setScanedResult}) => {

  console.log(scanedResult)

  const [user] = useAuthState(auth)
  const [payee, setPayee] = useState();
  const [payer, setPayer] = useState();
  const [amount, setAmount] = useState(0)
  console.log(amount)
  
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
    setDoc(doc(db, "users", payer?.uid),{
      balance: payer.balance - parseInt(amount),
    },{merge: true}).then(() => {
      addDoc(collection(db,"users",payer?.uid, "transactions"),{
        timestamp:serverTimestamp(),
        amount: amount,
        isCredited: false,
        OppName: payee.name,
    
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

      })
    }).catch(alert)


  }
  return (
    <div 
    // onClick={() => setScanedResult("")} 
    className="w-full h-screen">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <div className="flex flex-col text-center">
          <h1 className="font-semibold text-lg">Paying {payee?.name}</h1>
          <h1 className="text-sm">{payee?.fedenid}</h1>
        </div>
        <div className="flex flex-col">
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
          <button onClick={pay}>pay</button>
        </div>
      </div>
    </div>
  )
}

export default Amount