import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "../pages/MainPage";
import Autoplay from "../pages/Autoplay";
import Test from "../pages/Test"
import Test1 from "../pages/Test1";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/autoplay' element={<Autoplay />} />
            <Route path='/start' element={<Test />}/>
            <Route path='/test1' element={<Test1 />}/>
        </Routes>
    )
}

export default Routers