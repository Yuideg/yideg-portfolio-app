"ues client";
import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "./SocialLinks";
import Image from "next/image";
import {openSource} from "@/portfolio";

const GithubProfileCard = () => {
	const [githubProfileData,setGithubProfileData]=React.useState({
		avatar_url: "https://avatars3.githubusercontent.com/u/59178380?v=4",
		bio: "A passionate backend web developer.",
		location: "Ethiopia",
	})
	console.log(openSource);



	React.useEffect(()=>{
		fetch(`https://api.github.com/users/${openSource.githubUserName}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setGithubProfileData(data)
			})
	},[])


	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={githubProfileData.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL
							</p>
							<p className="text-white mt-3">{githubProfileData.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{githubProfileData.location}
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};




export default GithubProfileCard;

