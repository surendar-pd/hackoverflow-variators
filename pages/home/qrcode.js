import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,db, onSnapshot, doc} from '../../utils/firebase';
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useRouter} from 'next/router';


const Qrcode = () => {

    const router = useRouter();
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState("")
    console.log(currentUser)

    useEffect(() => {
        if(user) {
            onSnapshot(doc(db, "users", user?.uid),(snapshot) => {
                setCurrentUser(snapshot.data())
            })
        }
    }, [user]);
    
    return (
        <div className="w-full h-screen p-4 flex flex-col gap-4">
            <div className="flex items-center">
                <ArrowBackIosNewIcon onClick={() => router.push("/home")} className="text-lg"/>
                <h1>QR Code</h1>
            </div>
            <div className="">
                <img width="300" height="300" src={currentUser.qrcode} alt="QRCode"/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-slate-500">FEDEN ID</h1>
                <h1>{currentUser.fedenid}</h1>
            </div>
        </div>
    );
}

export default Qrcode