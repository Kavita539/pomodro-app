import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
		<footer className="bg-blue-400  dark:bg-neutral-700 text-white h-80 flex justify-around pt-12">
			<div className="flex flex-col p-4">
				<Link
					to="/"
					className="font-bold text-3xl hover:text-black dark:hover:text-green-400"
				>
					Kayyndra
				</Link>
				<div>
					<div className="text-xl my-4">© 2022 Copyright: Kayyndra</div>
					<div className="text-4xl flex gap-4 justify-between ">
						<a href="https://www.linkedin.com/in/kavita-pathak03/">
							<i className="fab fa-linkedin hover:text-black dark:hover:text-blue-400 "></i>
						</a>

						<a href="https://twitter.com/KavitaP_03">
							<i className="fab fa-twitter-square hover:text-black dark:hover:text-blue-400"></i>
						</a>
						<a href="https://github.com/Kavita539">
							<i className="fab fa-github-square hover:text-black dark:hover:text-blue-400"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="md:block hidden ">
				<h6 className="text-2xl font-bold my-4">Links</h6>
				<ul className="flex flex-col gap-4 ">
					<li className="dark:hover:text-blue-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/">
							Home
						</Link>
					</li>

					<li className="dark:hover:text-blue-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/tasks">
							Task Page
						</Link>
					</li>
					<li className="dark:hover:text-blue-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/pomodro">
							Pomodoro
						</Link>
					</li>
				</ul>
			</div>
		</footer>
    );
};

export { Footer };