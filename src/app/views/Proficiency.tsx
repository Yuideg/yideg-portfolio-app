import React from "react";
import { SkillBars } from "@/portfolio";
import { Fade } from "react-reveal";
import Typography from "@mui/material/Typography";
import {Box, Container} from "@mui/material";
import {Progress} from "reactstrap";

const Proficiency = () => {
	return (
		<Box >
			<Container className="section section-lg">
				<Fade bottom duration={1000} distance="40px">
							<Typography className="display-3 text-info" variant="h4" textAlign={"left"}>Proficiency</Typography>
							{SkillBars.map((skill) => {
								return (
									<div
										className="progress-info"
										key={skill.Stack}
									>
										<div className="progress-label">
											<span>{skill.Stack}</span>
										</div>
										<div className="progress-percentage">
											<span>{skill.progressPercentage}%</span>
										</div>
										<Progress
											max="100"
											value={skill.progressPercentage}
											color="info"
											role="progressbar"
											aria-label={skill.Stack}
										/>
									</div>
								);
							})}

				</Fade>
			</Container>

		</Box>

	);
};

export default Proficiency;
