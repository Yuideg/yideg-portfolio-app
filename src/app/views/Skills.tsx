import React, {Fragment} from "react";
import Image from "next/image";
import {Fade} from "react-reveal";

import {skillsSection} from "@/portfolio";
import {
    Box,
    Checkbox,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {Container} from "reactstrap";

const Skills = () => {
    return (
        <Fade bottom duration={1000} distance="40px">
            <Box className="text-center my-5 section section-lg">
                <h1 className="display-3 text-info h1">{skillsSection.title}</h1>
                <p className="lead">{skillsSection.subTitle}</p>


                <Grid container spacing={1} ml={2}>
                    <Grid item sm={4} xs={6}>
                        <Card sx={{maxWidth: 700}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    width="400"
                                    image="/lottie/dev.gif"
                                    alt="gif for developer"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Full Stack Developer
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Full stack developer with <strong>4+</strong> years of experience in web development.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                    </Grid>
                    <Grid item sm={8} xs={6}>
                        <Grid container spacing={1}>
                            <Grid item sm={4} md={4} xs={4}>
                                <List
                                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            <b>Advanced Skills(10 out of 10)</b>
                                        </ListSubheader>
                                    }
                                >
                                    {skillsSection.advanced.map((skill, index) => {
                                        return (
                                            <Container sx={{m:3}} key={index}>
                                               <p>{skill.name}</p>
                                            </Container>
                                        );
                                    })}

                                </List>

                            </Grid>
                            <Grid item sm={4} md={4} xs={4}>
                                <List
                                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            <b>Intermidaite Skills(9 out of 10)</b>
                                        </ListSubheader>
                                    }
                                >

                                    {skillsSection.intermidiate.map((skill, index) => {
                                        return (
                                            <Container key={index}>
                                                <p>{skill.name}</p>
                                            </Container>
                                        );
                                    })}


                                </List>

                            </Grid>
                            <Grid item sm={4} md={4} xs={4}>
                                <List
                                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            <b>Beginner Skills(6 out of 10)</b>
                                        </ListSubheader>
                                    }
                                >
                                    {skillsSection.beginner.map((skill, index) => {
                                        return (
                                            <Container key={index}>
                                                 <p>{skill.name}</p>
                                            </Container>
                                        );
                                    })}

                                </List>

                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Box>
        </Fade>
    );
};

export default Skills;
