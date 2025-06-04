import React from 'react';
import {Box, Typography, TextField, Button, Container} from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '80px 40px',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center', // Center content on small screens
        padding: '40px 20px',
    },
}));

const LeftBox = styled(Box)(({ theme }) => ({
    maxWidth: '500px',
    [theme.breakpoints.down('md')]: {
        // textAlign: 'center',
        // alignItems: 'center',
        // display: 'flex',
        // flexDirection: 'column',
    },
}));

const RightBox = styled(Box)(({ theme }) => ({
    flex: 1,
    backgroundColor: '#f9f7f1',
    padding: '40px',
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: {
        marginTop: '40px',
        width: '100%',
        maxWidth: '600px',
        padding: '20px',
        mx: 'auto', // center horizontally
    },
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF5722',
    color: '#fff',
    padding: '12px 30px',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '30px',
    marginTop: '20px',
    transition:".3s",
    textTransform: 'uppercase',
    '&:hover': {
        backgroundColor: '#fff',
        color:"#000"
    },
    // Responsive tweaks
    [theme.breakpoints.down('sm')]: {
        padding: '10px 20px',
        fontSize: '14px',
        // width: '50%',
    },
}));

const Contactus = () => {
    return (
        <Box sx={{
            pt:0
        }}>
            <Container maxWidth={'xl'}>
                <ContactWrapper>
                    <LeftBox>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: {
                                    xs: '10px', // smaller font on extra small screens
                                    sm: '12px', // default
                                },
                                padding: {
                                    xs: '4px 12px', // tighter padding on small screens
                                    sm: '6px 16px',
                                },
                                marginBottom: '20px',
                                borderColor: '#000',
                                color: '#000',
                                '&:hover': {
                                    borderColor: '#000',
                                },
                                display: 'inline-block',
                                alignSelf: {
                                    // xs: 'center', // center align on small screens
                                    xs: 'flex-start',
                                },
                            }}
                        >
                            Contact Us
                        </Button>


                        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{
                            alignItems: {xs:'center',md:'left'},
                            textAlign:{xs:'center',md:'left'}
                        }}>
                            Get In Touch
                        </Typography>

                        <Box sx={{ color: '#555', mb: 4 ,
                            fontSize: {xs:'15px'},
                            width: '70%',
                            textAlign:{xs:'center',md:'left'}}}>
                            We’re here to assist you! Please reach out with any questions, feedback, or project inquiries.
                        </Box>

                        <Box display="flex"  mb={2}>
                            <PhoneIcon sx={{ fontSize: 28, mr: 2,mt:0.5  }} />
                            <Box>
                                <Typography fontWeight="bold">Phone:</Typography>
                                <Typography>+91 999258 41698</Typography>
                            </Box>
                        </Box>

                        <Box display="flex"  mb={2}>
                            <EmailIcon sx={{ fontSize: 28, mr: 2,mt:0.5 }} />
                            <Box>
                                <Typography fontWeight="bold">Email Address:</Typography>
                                <Typography>parishramcontruction36@gmail.com</Typography>
                            </Box>
                        </Box>

                        <Box display="flex" >
                            <LocationOnIcon sx={{ fontSize: 28, mr: 2,mt:0.5 }} />
                            <Box>
                                <Typography fontWeight="bold">Location:</Typography>
                                <Typography>Vadadala Post Office, Plot No. 39, Royal <br/> Residency, Vadadla, Vagra, Dahej
                                    SIR, <br/> Bharuch, Gujarat, 392130</Typography>
                            </Box>
                        </Box>
                    </LeftBox>

                    <RightBox>
                        <Typography variant="h6" fontWeight="500" gutterBottom sx={{
                            pb:3
                        }}>
                            Send Message
                        </Typography>
                        <Box component="form">
                            <Box
                                display="grid"
                                gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
                                gap={{sm: 3,xs:2}}
                                mb={2}
                            >
                                <TextField label="Name" fullWidth size="small" sx={{
                                    backgroundColor: 'white',
                                    border: '1px solid #fff',
                                }}/>
                                <TextField label="Email" fullWidth size="small" sx={{
                                    backgroundColor: 'white',
                                    border: '1px solid #fff',
                                }}/>
                                <TextField label="Phone" fullWidth size="small" sx={{
                                    backgroundColor: 'white',
                                    border: '1px solid #fff',
                                    mb: {sm:1.5,xs:0}
                                }}/>
                                <TextField label="Subject" fullWidth size="small" sx={{
                                    backgroundColor: 'white',
                                    border: '1px solid #fff',
                                    mb:{sm:1.5,xs:0}
                                }}/>
                            </Box>
                            <TextField
                                label="Message"
                                multiline
                                rows={5}
                                fullWidth
                                size="small"
                                sx={{ mb: 3,  backgroundColor: 'white',
                                    border: '1px solid #fff',   }}
                            />
                            <Box textAlign="left">
                                <ContactButton variant="contained">Submit Now</ContactButton>
                            </Box>
                        </Box>
                    </RightBox>


                </ContactWrapper>
            </Container>
        </Box>
    );
};

export default Contactus;
