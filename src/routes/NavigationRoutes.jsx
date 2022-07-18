import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import {
    Home,
    Login,
    Signup,
    Pomodro,
    UserProfile,
    Tasks
} from "../pages";
import Mockman from "mockman-js";
import {
    PrivateRoutes
} from "./PrivateRoutes";

const NavigationRoutes = () => {
return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/pomodro" element={<PrivateRoutes element={Pomodro}/>}/>
        <Route path="/pomodro/:taskId" element={<PrivateRoutes element={Pomodro}/>}/>
        <Route path="/userprofile" element={<PrivateRoutes element={UserProfile}/>}/>
        <Route path="/tasks" element={<PrivateRoutes element={Tasks}/>}/>
        <Route path="/mockman" element={<Mockman />} />
    </Routes>
);
};
export {
    NavigationRoutes
};