import React from "react";
import Image from "next/image";
import {projects, realProjects} from "@/portfolio";
import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Container, Row} from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import {Fade} from "react-reveal";
import {Box, Divider, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

const Projects = () => {
    return (
        <section className="section section-lg">
            <Container>
                <Fade bottom duration={1000} distance="40px">
                    <div className="d-flex p-4">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <i className="ni ni-laptop text-info"/>
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 text-info">Projects</h4>
                        </div>
                    </div>
                    <Row className="row-grid align-items-center">
                        {projects.map((data, i) => {
                            return <ProjectsCard key={i} data={data}/>;
                        })}
                    </Row>
                    <Row>
                        {realProjects.map((data, index) => {
                            return (
                                <Box  className="mt-20" key={index}>
                                    <Typography variant="h4" textAlign="center" className="pt-3 mt-4"><b>{data.name}</b></Typography>
                                    <Paper  elevation={6} className="p-6 m-4">
                                        <Grid container spacing={2}>
                                            <Grid item sm={6} md={6} xs={12}>
                                                <Image
                                                    height={300}
                                                    width={300}
                                                    src={data.cover}
                                                    alt="project cover image"
                                                />
                                            </Grid>
                                            <Grid item sm={6} md={6} xs={12}>
                                                <h5>{data.role}</h5>
                                                <p>{data.desc}</p>


                                            </Grid>

                                        </Grid>
                                    </Paper>
                                </Box>
                            );
                        })}
                    </Row>
                </Fade>
            </Container>
        </section>
    );
};

export default Projects;

