import React, {
	useState
} from "react";
import {
	Link,
	useNavigate,
	useLocation
} from "react-router-dom";
import {
	toast
} from "react-toastify";
import {
	useAuth
} from "../../context";
import {
	authConstants
} from "../../constants";
import {
	SunIcon,
	MoonIcon,
	MenuIcon,
	XIcon
} from "@heroicons/react/solid";
import {
	toastStyle
} from "../../utils";


const Navbar = () => {
const navigate = useNavigate();

let Links = [{
		name: "Tasks",
		link: "/tasks"
	},
	{
		name: "Pomodro",
		link: "/pomodro"
	},
];

const [mobileNav, setMobileNav] = useState(false);

const [theme, setTheme] = useState("Light");

const {
	authState: {
		token
	},
	authDispatch,
} = useAuth();

const location = useLocation();

const logoutHandler = (dispatch) => {
		localStorage.removeItem("token");
		dispatch({
			type: authConstants.LOGOUT,
		});
		navigate("/");
		toast.success("Logout Successfully ", toastStyle);
};
return(
<div className="shadow-md w-full sticky top-0 left-0 md:flex justify-around  items-center  bg-white  py-4 md:px-10 px-7 text-lg font-medium dark:bg-neutral-700 dark:text-white transition-all duration-300 ease-in z-10">
			<Link to="/">
				<h2 className="font-bold hover:text-blue-500 ">Kayyndra</h2>
			</Link>
			<div className=" absolute flex right-8 top-4 cursor-pointer md:hidden">
				{theme === "Light" ? (
					<SunIcon
						className="block h-8 w-8 mr-4 md:hidden self-center"
						onClick={() => setTheme("Dark")}
					/>
				) : (
					<MoonIcon
						className="block h-8 w-8 mr-4 md:hidden self-center "
						onClick={() => setTheme("Light")}
					/>
				)}
				{mobileNav ? (
					<XIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				) : (
					<MenuIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				)}
			</div>
			<ul
				className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9   bg-white dark:bg-neutral-700 dark:text-white transition-all duration-300 ease-in  ${
					mobileNav ? "top-10 " : "top-[-470px]"
				}`}
			>
				{Links.map((link) => (
					<li key={link.name} className="md:ml-8 text-l md:my-0 my-7 ">
						<Link to={link.link} className=" hover:text-blue-500 duration-500">
							{link.name}
						</Link>
					</li>
				))}
				{token ? (
					<li
						className="md:ml-8 text-l md:my-0 my-7 "
						onClick={(e) => {
							e.preventDefault();
							logoutHandler(authDispatch);
						}}
					>
						<p className="hover:text-blue-500 duration-500 ">Logout</p>
					</li>
				) : (
					<li className="md:ml-8 text-l md:my-0 my-7  ">
						<Link to="/login" className=" hover:text-blue-500 duration-500">
							Login
						</Link>
					</li>
				)}
				{theme === "Light" ? (
					<SunIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme("Dark")}
					/>
				) : (
					<MoonIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme("Light")}
					/>
				)}
			</ul>
		</div>


);

};

export { Navbar };