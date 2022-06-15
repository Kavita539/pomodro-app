import React, {
    useState
} from "react";
import {
    Link,
    useNavigate
} from "react-router-dom";
import axios from "axios";
import {
    toast
} from "react-toastify";
import {
    toastStyle
} from "../../utils";
import {
    useAuth
} from "../../context";
import {
    authConstants
} from "../../constants";

const Signup = () => {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }, );

    const navigate = useNavigate();

    const {
        authDispatch
    } = useAuth();

    const changeHandler = (e) => {
        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value
        })
    };

    const signupHandler = async (
        firstName,
        lastName,
        email,
        password,
        dispatch
    ) => {
        try {

            const response = await axios.post(`/api/auth/signup`, {
                firstName,
                lastName,
                email,
                password
            });

            localStorage.setItem("token", response.data.encodedToken);

            dispatch({
                type: authConstants.AUTHENTICATION,
                payload: {
                    token: response.data.encodedToken,
                    userInfo: response.data.foundUser,
                },
            });

            toast.success("Registered Successfully ", toastStyle);

            navigate("/");
        } catch (error) {
            if (error.response.status === 422) {
                toast.error("Email Already Exists", toastStyle);
            } else {
                toast.error("Server Error", toastStyle);
            }
        }
    };

    return(
        
		<div className="flex justify-center items-center  w-screen h-screen ">
        <div className="flex items-center justify-around shadow-2xl  dark:bg-neutral-700 rounded-md bg-white">
            <div className="p-2 m-1 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-md ">
                    <Link to="/" className="flex justify-center font-bold text-3xl">
                        Kayyndra
                    </Link>

                    <h2 className="mt-4 text-lg font-semibold text-center leading-9">
                        Hey User! Create a New Account
                    </h2>

                    <p className="mt-1  text-sm text-center leading-5 max-w">
                        Or
                        <Link to="/login" className="font-medium transition m-1">
                            Login into Existing Account
                        </Link>
                    </p>
                </div>
                <form
                    className="mt-4 sm:mx-auto sm:w-full sm:max-w-md"
                    onSubmit={(e) => {
                        e.preventDefault();
                        signupHandler(
                            userDetail.firstName,
                            userDetail.lastName,
                            userDetail.email,
                            userDetail.password,
                            authDispatch
                        );
                    }}
                >
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium leading-5"
                        >
                            First Name
                        </label>

                        <div className="mt-1 rounded-md shadow-sm">
                            <input
                                id="firstName"
                                type="text"
                                required
                                autoFocus
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                name="firstName"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-5"
                        >
                            Last Name
                        </label>

                        <div className="mt-1 rounded-md shadow-sm">
                            <input
                                id="lastName"
                                type="text"
                                required
                                autoFocus
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                name="lastName"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-5"
                        >
                            Email address
                        </label>

                        <div className="mt-1 rounded-md shadow-sm">
                            <input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                placeholder="test@gmail.com"
                                name="email"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 leading-5 dark:text-white"
                        >
                            Password
                        </label>

                        <div className="mt-1 rounded-md shadow-sm">
                            <input
                                id="password"
                                type="password"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                name="password"
                                onChange={changeHandler}
                                autoComplete="on"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="form-checkbox w-4 h-4 transition duration-150 ease-in-out"
                            />
                            <label
                                htmlFor="remember"
                                className="block ml-2 text-sm text-gray-900 leading-5 dark:text-white"
                            >
                                I accept Terms and Conditions
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 w-full  text-sm font-bold text-white rounded-md hover:bg-blue-400 "
                            >
                                Register
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );

};

export {
    Signup
};