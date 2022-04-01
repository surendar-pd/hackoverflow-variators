import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut,auth} from '../utils/firebase'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import {useRouter} from 'next/router';

const Header = ({title, icon}) => {

    const [user] = useAuthState(auth);
    const router = useRouter();


    return (
        <header className="w-full h-16 flex justify-between items-start">
            <div className="flex items-center">
            <h1 className="text-xl">FEDEN</h1>
            </div>
            {/* <h1 className="text-xl">Hi <span className="font-semibold">{user?.displayName || "..."}</span></h1> */}
            {/* <button onClick={() => {signOut(auth); router.push('/')}}>sign out</button> */}
            <QrCodeScannerIcon/>
        </header>
    )
}

export default Header