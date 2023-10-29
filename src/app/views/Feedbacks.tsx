import { feedbacks } from "@/portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-reveal";
import Typography from "@mui/material/Typography";

const Feedbacks = () => {
	return (
		<section>
			<Container>
				<div className="d-flex p-4 ">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="fa fa-star text-info" />
						</div>
					</div>
					<Typography className="display-3 text-info" variant="h4" textAlign={"left"}>Testimonials</Typography>

				</div>
				<Fade bottom duration={1000} distance="40px">

					<Row className="row-grid align-items-center">
						{feedbacks.map((data, i) => {
							return (
								<Col key={i} lg={6}>
									<FeedbackCard data={data} />
								</Col>
							);
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Feedbacks;
