import React, { useEffect } from 'react'
import BottomNavi from '../../components/BottomNavi';
import {useRouter} from 'next/router';

const Index = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('/home/dashboard')
    },[])

}

export default Index