import React from "react";
import {
    Footer,
    Navbar
} from "../../components";
import {
    Link
} from "react-router-dom";
import pomodoroBanner from "../../assets/pomodro-banner.svg";

const Home = () => {
    return(
        <>
		<div className="bg-white dark:bg-neutral-800 dark:text-white ">
        <Navbar />
        <div className="relative w-screen flex flex-col max-w-full overflow-x-hidden  ">
            <div className="text-center pt-14 sm:text-blue sm:absolute sm:top-1/4  self-center  ">
                <h2 className="font-extrabold text-5xl mt-4 ">
                    Kayyndra
                </h2>
                <p className=" text-xl m-1.5 ">
                    Focus on increasung efficiency and get things done faster and better
                </p>
                <Link to="/tasks">
                    <button className="p-2 bg-blue-700   text-sm font-bold text-white rounded-md hover:bg-blue-400 md:w-1/5 m-4">
                        Get Started
                    </button>
                </Link>
            </div>
            <img
                className="bg-no-repeat bg-cover w-full h-full dark:bg-neutral-800"
                src={pomodoroBanner}
                alt="Banner"
            />
        </div>
        <Footer />
    </div>
    </>
        
        
    );
};

export {Home};