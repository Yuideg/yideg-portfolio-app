import React from "react";
import EdutionCard from "../components/EdutionCard";
import { educationInfo } from "@/portfolio";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

const Edution = () => {
	return (
		<section className="section pb-0 bg-gradient-info my-5">
			<Container>
				<div className="d-flex px-3">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-books text-info" />
						</div>
					</div>
					<div className="pl-4">
						<Typography className="display-3 text-white">Education</Typography>
					</div>
				</div>
				<div className="row-grid align-items-center">
					{educationInfo.map((info) => {
						return (
							<div
								className="order-lg-1"
								key={info.schoolName}
							>
								<EdutionCard education={info} />
							</div>
						);
					})}
				</div>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
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
	);
};

export default Edution;
