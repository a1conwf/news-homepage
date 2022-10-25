import React from "react";
import {useState} from "react";

//Style
import "./Header.scss";

//Logo and icons
import logo from "../../assets/brand/logo.svg";
import iconHamburger from "../../assets/svg/icon-menu.svg";
import iconClose from "../../assets/svg/icon-menu-close.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<header className="header">
			<div className="container">
				<div className={isExpanded ? "overlay" : null}></div>
				<div className="header__inner">
					<img className="logo" src={logo} alt="logo-img" />

					<nav className={isExpanded ? "nav active" : "nav"}>
						<ul className="nav__list">
							<li className="nav__list-item">
								<a href="#!">Home</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">New</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Popular</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Trending</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Categories</a>
							</li>
						</ul>
					</nav>

					<div className="hamburger" onClick={() => setIsExpanded(!isExpanded)}>
						{!isExpanded ? <img src={iconHamburger} alt="icon-hamburger" className="hamburger__icon" /> : <img src={iconClose} alt="icon-close" className="close__icon" />}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
