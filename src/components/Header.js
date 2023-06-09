import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
	return (
		<div className="py-8">
			<div className="container mx-auto flex justify-between items-center">
				<a href="#">
					<img src={Logo} alt="" />
				</a>
				<button className="btn btn-sm">Work with me</button>
			</div>
		</div>
	);
};

export default Header;
