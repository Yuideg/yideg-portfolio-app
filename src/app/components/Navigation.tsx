"use client";
import React, { useState, useEffect } from "react";

import {greetings, openSource, socialLinks} from "@/portfolio"
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";
import {Box} from "@mui/material";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");
	const [githubProfileData,setGithubProfileData]=React.useState({
		avatar_url: "https://avatars3.githubusercontent.com/u/59178380?v=4",
		bio: "A passionate backend web developer.",
		location: "Ethiopia",
	})
	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});
	React.useEffect(()=>{
		fetch(`https://api.github.com/users/${openSource.githubUserName}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setGithubProfileData(data)
			})
	},[])

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						<NavbarBrand href="/" className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand>
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Twitter"
										className="nav-link-icon"
										href={socialLinks.twitter}
										target="_blank"
									>
										<i className="fa fa-twitter-square" />
										<span className="nav-link-inner--text d-lg-none ml-2">
											Twitter
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Github"
										className="nav-link-icon"
										href={socialLinks.github}
										target="_blank"
									>
										<i className="fa fa-github" />
										<span className="nav-link-inner--text d-lg-none ml-2">
											Github
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Linkedin"
										className="nav-link-icon"
										href={socialLinks.linkedin}
										target="_blank"
									>
										<i className="fa fa-linkedin" />
										<span className="nav-link-inner--text d-lg-none ml-2">
											Linkedin
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Instagram"
										className="nav-link-icon"
										href={socialLinks.instagram}
										target="_blank"
									>
										<i className="fa fa-instagram" />
										<span className="nav-link-inner--text d-lg-none ml-2">
											Instagram
										</span>
									</NavLink>
								</NavItem>
							</Nav>
						</UncontrolledCollapse>
					</Container>
					<Box className="">
						<img
							src={githubProfileData.avatar_url}
							style={{ width: "100px" }}
							alt=""
							className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
						/>
						<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
							<i className="ni ni-pin-3 text-info mr-2" />
							{githubProfileData.location}
						</div>
					</Box>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
