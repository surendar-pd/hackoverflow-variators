import { Avatar } from '@mui/material'
import React, {useState, useEffect} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {auth, onSnapshot, doc, collection, db, query, orderBy} from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const Transaction = ({setCurrentPage, currentUser}) => {

    const [transactions, setTransactions]  = useState([]);
    const [user] = useAuthState(auth);
    console.log(transactions)

    useEffect(() => {
        if (currentUser) {
            onSnapshot(query(collection(db,"users",currentUser.uid,"transactions"), orderBy("timestamp", "desc")),(snapshot) => {
                setTransactions(
                    snapshot.docs.map((doc) => doc.data())
                )
            })
        }
    },[])

    return (
        <div className="">
            <div className="flex mb-4 items-center">
                <ArrowBackIosNewIcon onClick={() => setCurrentPage("card")} className="text-lg"/>
                <h1 className="mx-2">All Transactions</h1>
            </div>
            <div className="w-full h-[530px] flex flex-col gap-4 overflow-y-scroll">
                {
                    transactions?.map((content,index) => (
                        <div key={index} className="bg-white flex justify-between items-center p-4 shrink-0 h-24 w-full rounded">
                            <div className="flex items-center gap-2">
                                <Avatar>{content?.OppName[0]}</Avatar>
                                <div>
                                    <h1 className="font-semibold">{content?.OppName}</h1>
                                    <h1 className="text-sm">
                                        {
                                        new Date(content?.timestamp.toDate()).toLocaleDateString()
                                        }
                                    </h1>
                                    <h1 className="text-sm">{content?.note}</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className={`${content?.isCredited ? "text-green-500" : "text-red-500"}`}>{
                                    content?.isCredited ? "+" : "-"
                                    }&nbsp;{content?.amount}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Transaction