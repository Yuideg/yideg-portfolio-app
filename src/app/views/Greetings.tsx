import React, { useEffect } from "react";
import { greetings } from "@/portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import {number} from "prop-types";

const Greetings = () => {
	// useEffect(() => {
	// 	if (typeof document !== 'undefined') {
	// 		// Safe to use `document`
	// 		document.documentElement.scrollTop = 0;
	// 	}
	// 	if (document.scrollingElement !== null) {
	// 		document.scrollingElement.scrollTop = 0;
	// 	}
	// });
	return (
		<main>
			<div className="position-relative">
				<section className="section section-lg section-shaped pb-250">
					<div className="shape shape-style-1 bg-gradient-info">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row>
								<Col lg="6">
									<h1 className="display-3 text-white">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white">
										{greetings.description}
									</p>
								</Col>
								<Col lg="6">
									<GreetingLottie animationPath="/lottie/coding.json" />
								</Col>
							</Row>
						</div>
					</Container>
					<div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Greetings;
