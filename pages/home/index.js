import React, { useEffect, useState } from "react";
import BottomNavi from "../../components/BottomNavi";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Dashboard from "./dashboard";
import Card from "./card";
import Profile from "./profile";
import { auth, onSnapshot, doc, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Graph from "./graph";
import Transaction from "./transaction";

const Index = () => {
const [user] = useAuthState(auth);
const [currentUser, setCurrentUser] = useState({});

const [currentPage, setCurrentPage] = useState("dashboard");

useEffect(() => {
    if (user) {
    onSnapshot(doc(db, "users", user?.uid), (snapshot) => {
        setCurrentUser(snapshot.data());
    });
    }
}, [user]);

return (
    <div className="w-full h-screen flex flex-col">
    <div className="w-full flex-1 p-4">
        <Header setCurrentPage= {setCurrentPage}/>
        <div className="w-full h-full">
        {currentPage === "dashboard" ? (
            <Dashboard currentUser={currentUser} />
        ) : currentPage === "profile" ? (
            <Profile />
        ) : currentPage === "card" ? (
            <Card setCurrentPage={setCurrentPage}/>
        ) : currentPage === "graph" ? (
            <Graph />
        ) : currentPage === "transaction"?
            <Transaction currentUser={currentUser} setCurrentPage={setCurrentPage}/>
            :""
        }
        </div>
    </div>
    <BottomNavi setCurrentPage={setCurrentPage} />
    </div>
);
};

export default Index;
