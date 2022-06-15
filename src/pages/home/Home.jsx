import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
import herobanner from "../../assets/herobanner.png";

const Home = () => {
    return(
        
		<div className="bg-white dark:bg-neutral-800 dark:text-white">
        <Navbar />
        <div className="relative w-screen flex flex-col">
            <div className="text-center pt-8  sm:text-blue sm:absolute sm:top-1/4  self-center  ">
                <h2 className="font-extrabold text-5xl m-4 ">
                    Kayyndra
                </h2>
                <p className=" text-xl m-4 ">
                    Focus on increasung efficiency and get things done faster and better
                </p>
                <Link to="/tasks">
                    <button className="p-2 bg-blue-500   text-sm font-bold text-white rounded-md hover:bg-blue-400 md:w-1/5 m-4">
                        Get Started
                    </button>
                </Link>
            </div>
            <img
                className="bg-no-repeat bg-cover w-full h-full "
                src={herobanner}
                alt="Banner"
            />
        </div>
        <Footer />
    </div>
        
        
    );
};

export {Home};