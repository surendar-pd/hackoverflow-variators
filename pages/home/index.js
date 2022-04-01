import React, { useEffect, useState } from 'react'
import BottomNavi from '../../components/BottomNavi';
import {useRouter} from 'next/router';
import Header from '../../components/Header';
import Dashboard from './dashboard';
import Card from './card';
import Profile from './profile';
import Transaction from './transaction';
import {auth} from '../../utils/firebase';
import { useAuthState} from "react-firebase-hooks/auth";


const Index = () => {

    const [user] = useAuthState(auth);

    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("dashboard")


    return (
    <div className="w-full h-screen flex flex-col">
        <div className="w-full flex-1 p-4">
            <Header/>
            <div className="w-full h-full">
                {
                    currentPage === "dashboard"?
                    <Dashboard/>
                    : currentPage === "profile"?
                    <Profile/>
                    : currentPage === "card"?
                    <Card setCurrentPage={setCurrentPage}/>
                    : currentPage === "transaction"?
                    <Transaction/>
                    :""
                }
            </div>
        </div>
        <BottomNavi setCurrentPage={setCurrentPage}/>
    </div>
    )
}

export default Index