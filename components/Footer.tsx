import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-1 ">
					<ul>
						<p className="text-gray-800 font-bold text-4xl pb-6">
							Edu<span className="text-blue-600">Assist</span>
						</p>
						<div className="flex gap-6">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-200">
				<h1 className=" text-gray-800 font-semibold">
					© 2023-2024 All rights reserved 
					
				</h1>
			</div>
		</>
	);
}

export default Footer;