import React, { useState } from 'react';
import {Alert, Box, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField} from "@mui/material";
import {Button} from "reactstrap";
import axios from 'axios';
import InputEmoji from 'react-input-emoji'
import SendIcon from '@mui/icons-material/Send';
const _=require("lodash")
import ErrorIcon from '@mui/icons-material/Error';
import Typography from "@mui/material/Typography";
interface Error {
    name?: string;
    sender?: string;
    subject?: string;
    message?: string;
};
function ComposeEmail() {
    const [name, setName] = useState('');
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [errors, setErrors] = useState<Error>({}); // To track validation errors


    const iconStyle = {
        color: 'red',
    };
    const conditionalStyles = errors.message !== undefined
        ? { border: '1px solid red',width: '100%' }
        : { width: '100%' };
    const validateForm = () => {
        const newErrors:Error = {};
        if (name.trim() === '') {
            newErrors.name = 'Full Name is required';
        }else if (sender.trim() === '') {
            newErrors.sender = 'Email Address is required';
        } else if (!isValidEmail(sender)) {
            newErrors.sender = 'Please enter a valid email address';
        } else if (subject.trim() === '') {
            newErrors.subject = 'Subject is required';
        } else if (message.trim() === '') {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const isValidEmail = (email) => {
        // Simple email validation, you can use a more complex regex for email validation
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleCloseError = () => {
        setErrorOpen(false);
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        // Implement your email sending logic with Nodemailer here
        if (validateForm()) {
            axios
                .post('https://send-email-kappa.vercel.app/api/send-email', {
                    name,
                    sender,
                    subject,
                    message,
                })
                .then((response) => {
                    console.log(response.data);
                    // Handle success or show a success message to the user
                    setErrorOpen(false);
                    setOpen(true);
                    setName('');
                    setSender('');
                    setSubject('');
                    setMessage('');
                })
                .catch((error) => {
                    setOpen(false)
                    setErrorOpen(true);
                    console.error(error);
                    // Handle error or show an error message to the user
                });

        }

    };

    return (
        <>
            <Typography variant="h2" textAlign="center" className="text-white m-2">Get In Touch</Typography>


        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSendEmail}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Full Name:
                        </label>
                        <TextField
                            error={errors.name !== undefined}
                            helperText={errors.name}
                            id={"name"}
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="sender" className="block text-gray-700 font-medium mb-2">
                            Email Address:
                        </label>
                        <TextField
                            error={errors.sender !== undefined}
                            helperText={errors.sender}
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            value={sender}
                            onChange={(e) => setSender(e.target.value)}
                        />

                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Subject:
                        </label>

                        <TextField
                            error={errors.subject !== undefined}
                            helperText={errors.subject}
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message:
                        </label>
                        <div style={conditionalStyles}>
                            <InputEmoji
                                value={message}
                                onChange={ setMessage}
                                cleanOnEnter
                                placeholder="Type a message"
                            />
                        </div>
                        <span style={{color:"red",display:"block",fontSize:12}}>{
                            errors.message !== undefined ? errors.message : ""
                        }</span>

                    </div>
                <Box
                    width={"40%"}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                     className="m-auto">
                    <Button
                        variant="contained"
                        type="submit"
                        color={"primary"}
                    >
                        Send Email
                    </Button>
                </Box>

                </form>


            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email message successfully sent to Yideg!
                </Alert>
            </Snackbar>
            <Dialog open={errorOpen} onClose={handleCloseError}>
                <DialogTitle>
                    <ErrorIcon style={iconStyle} /> Operation Failed
                </DialogTitle>
                <DialogContent>
                    <div>Email message not sent. Something went wrong</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseError} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    );
}

export default ComposeEmail;
