import Typography from "@mui/material/Typography";

"ues client";
import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { makeStyles } from '@mui/styles';

import SocialLinks from "./SocialLinks";
import Image from "next/image";
import {openSource} from "@/portfolio";
import ComposeEmail from "@/app/components/Message";
import {Box, Grid} from "@mui/material";
const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: "black",
		width: '60%',
		height: 'auto',
		margin: 'auto',
		borderRadius: '20px',
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		color: '#fff',
		textAlign: 'center',
		padding: '10px'
	}
}));

const GithubProfileCard = () => {
	const classes = useStyles();
	const currentYear = new Date().getFullYear();

	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
					<div className={classes.box}>
						<ComposeEmail/>
					</div>
			<Row>
				<Typography variant="body2" className={classes.footer}  align="center">
					Copyright{'©'}
					{currentYear}{' Yideg Misganaw'}. All Rights Reserved.
				</Typography>
			</Row>
		</Card>
	);
};




export default GithubProfileCard;

