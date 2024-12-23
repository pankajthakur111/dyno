import * as React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/home/Home';


const RoutesUrl = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        </>
    )
}
export default RoutesUrl;