import { Avatar } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {signOut,auth,onSnapshot, doc,db} from '../../utils/firebase'
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArticleIcon from '@mui/icons-material/Article';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PasswordIcon from '@mui/icons-material/Password';
import {useAuthState} from 'react-firebase-hooks/auth';


const Profile = () => {
    const [user] = useAuthState(auth);
    const [userDetails, setUserDetails] = useState();
    const router = useRouter();

    useEffect(() => {

        if (!user) return;
        onSnapshot(doc(db, "users", user.uid), (snapshot) => {
            setUserDetails(snapshot.data());
        })

    } ,[user]);
    return (
        <div className="w-full flex flex-col">
            {/* <div className="flex-1 p-4"> */}
                <div className=" w-full h-full flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <Avatar sx={{width:75, height:75, backgroundColor:"green", backgroundOpacity:50}}>{userDetails?.name[0]}</Avatar>
                        <div>
                            <h1>{userDetails?.name}</h1>
                            <h1 className="text-sm">{userDetails?.fedenid}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div onClick={() => router.push("/home/qrcode")} className="flex items-center gap-2">
                            <QrCode2Icon className="text-slate-500"/>
                            <h1 className="text-sm">QR Code</h1>
                        </div>
                        <div onClick={() => router.push("/auth/setpin")} className="flex items-center gap-2">
                            <PasswordIcon className="text-slate-500"/>
                            <h1 className="text-sm">Set up PIN</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <MailIcon className="text-slate-500"/>
                            <h1 className="text-sm">{userDetails?.email}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocalOfferIcon className="text-slate-500"/>
                            <h1 className="text-sm">Pricing</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArticleIcon className="text-slate-500"/>
                            <h1 className="text-sm">Terms and Conditions</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <SettingsIcon className="text-slate-500"/>
                            <h1 className="text-sm">Settings</h1>
                        </div>
                        <div onClick={() => {signOut(auth); router.push('/')}} className="flex items-center gap-2">
                            <LogoutIcon className="text-slate-500"/>
                            <h1 className="text-sm">Logout</h1>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Profile