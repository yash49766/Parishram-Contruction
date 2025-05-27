import React from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';
import { Build, Verified, AccessTime } from '@mui/icons-material';

const services = [
    {
        title: 'Proven Expertise',
        description: 'Our team brings years of experience, ensuring high-quality work for you.',
        icon: <Build fontSize="large" />,
    },
    {
        title: 'Quality Assurance',
        description: 'Our commitment to quality control guarantees that every project meets standards.',
        icon: <Verified fontSize="large" />,
    },
    {
        title: 'Timely Delivery',
        description: 'We understand deadlines and complete your projects on schedule.',
        icon: <AccessTime fontSize="large" />,
    },
];

function Delivery() {
    return (
        <Box sx={{ flexGrow: 1, py: 6, backgroundColor: '#121212' }}>
            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item key={index}>
                        <Card
                            sx={{
                                width: 350,
                                backgroundColor: '#1E1E1E',
                                color: 'white',
                                textAlign: 'center',
                                borderRadius: 3,
                                p: 3,
                                height: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 3,
                            }}
                        >
                            <Box sx={{ mb: 2 }}>{service.icon}</Box>
                            <Typography variant="h6" gutterBottom>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="grey.400" sx={{ px: 2 }}>
                                {service.description}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Delivery;
