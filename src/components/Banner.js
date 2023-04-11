import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
	return (
		<div className="section" id="home">
			<div className="container mx-auto">
				<div>
					<div>
						<h1>
							BEN <span>AIDEN</span>
						</h1>
					</div>
					<div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
						<span className="mr-2">I am a </span>
						<TypeAnimation
							sequence={[
								"Developer",
								2000,
								"Designer",
								2000,
								"Youtuber",
								2000,
							]}
							speed={50}
							className="text-accent"
							wrapper="span"
							repeat={Infinity}
						/>
					</div>
					<div>
						<img src={Image} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
