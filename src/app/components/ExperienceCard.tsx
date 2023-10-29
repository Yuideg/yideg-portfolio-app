import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";
import {Avatar} from "@mui/material";
function getName(s){
	let names = "";
	s=s.split(" ")
	s.forEach(item=>{
		names+=item[0]
	});
	return names;
}
const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: "blueviolet" }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px" }}
						>
							{
								data.companylogo?(
									<Image
										src={data.companylogo}
										width={100}
										height={100}
										alt={data.companylogo}
									/>
								):(
								<Avatar sx={{ bgcolor: data.color }}>{getName(data.company)}</Avatar>


						)
							}
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardSubtitle className={"mt-2"}>{data.job}</CardSubtitle>

						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
