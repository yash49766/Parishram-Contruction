import React, { useEffect, useRef } from 'react';
import {Box, Grid, Card, Typography, Container} from '@mui/material';
import { Build, Verified, AccessTime } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Proven Expertise',
        description: 'Our team brings years of experience, ensuring high-quality work for you.',
        icon: <Build fontSize="large" sx={{ color: '#fff' }} />,
    },
    {
        title: 'Quality Assurance',
        description: 'Our commitment to quality control guarantees that every project meets standards.',
        icon: <Verified fontSize="large" sx={{ color: '#fff' }} />,
    },
    {
        title: 'Timely Delivery',
        description: 'We understand deadlines and complete your projects on schedule.',
        icon: <AccessTime fontSize="large" sx={{ color: '#fff' }} />,
    },
];

function Delivery() {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = containerRef.current.querySelectorAll('.service-card');

        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Box
            ref={containerRef}
            sx={{ flexGrow: 1, mt:4, py: 8,pb:10, backgroundColor: '#1A1A1A' }}
        >
            <Container maxWidth={'xl'}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        fontSize: { xs: '24px', sm: '32px', md: '40px' },
                        fontWeight: 600,
                        mb: 7,
                        color: '#fff',
                        lineHeight: 1.3,
                    }}
                >
                    Smart Solutions for Modern Needs
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item key={index}>
                            <Card
                                className="service-card"
                                sx={{
                                    width: 350,
                                    backgroundColor: '#2C2C2C',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    p: 3,
                                    height: 250,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 3,
                                    transform: 'translateY(0)', // Set initial transform
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transform transition
                                    '&:hover': {
                                        // boxShadow: 6,
                                        transform: 'translateY(-5px) !important',
                                    },
                                }}
                            >

                            <Box sx={{ mb: 2 }}>{service.icon}</Box>
                                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#B2BDC6', px: 2 }}>
                                    {service.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Delivery;
