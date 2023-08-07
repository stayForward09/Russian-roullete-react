import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "../pages/MainPage";
import Autoplay from "../pages/Autoplay";
import Test from "../pages/Test"
import GameInfo from "../pages/GameInfo";
import BetInfo from "../pages/BetInfo";
import Modal from "../pages/Modal/Modal";
import Wrapper from "../pages/Register-Login/Wrapper";
import Account from "../pages/Account/Account"
import UserStatus from "../pages/UserStatus/UserStatus"
import View from "../pages/View";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<View />}/>            
            <Route path='/home' element={<MainPage />}/>
            <Route path='/autoplay' element={<Autoplay />} />
            <Route path='/start' element={<Test />}/>
            <Route path='/gameinfo' element={<GameInfo />}/>
            <Route path='/betinfo' element={<BetInfo />}/>
            <Route path='/betlist' element={<Modal />}/>
            <Route path='/login_register' element={<Wrapper />}/>
            <Route path='/account' element={<Account />}/>
            <Route path='/userstatus' element={<UserStatus />}/>
        </Routes>
    )
}

export default Routers