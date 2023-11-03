import React from "react";
import {Card} from "reactstrap";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


const FeedbackCard = ({data}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <Box className="">
                <img
                    src={data.vatar ? data.avatar_url : "/img/default.jpg"}
                    style={{width: "200px"}}
                    alt={data.name}
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                />
            </Box>
            <CardContent>
                <Typography className="text-info" gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="description mt-3">
                    {data.feedback}
                </Typography>
            </CardContent>
        </Card>

    );
};

export default FeedbackCard;
