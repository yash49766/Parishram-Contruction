import React, { useRef, useEffect } from 'react';
import {Box, Container, Typography, useMediaQuery, useTheme} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Img1 from '../../assets/home/Screenshot 2025-05-26 111040.png';
import Img2 from '../../assets/home/two-specialists-inspect-commercial-industrial-600nw-1712804020.webp';
import Img3 from '../../assets/home/portfolio-1.jpg';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Share your Projects',
        description: 'Choose a convenient time and date for your cleaning service.',
        image: Img1
    },
    {
        id: '02',
        title: 'Testing Your Projects',
        description: 'Choose a convenient time and date for your cleaning service.',
        image: Img2
    },
    {
        id: '03',
        title: 'Complete Project',
        description: 'Choose a convenient time and date for your cleaning service.',
        image: Img3
    }
];

const Workingprocess = () => {
    const containerRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        const stepsElements = containerRef.current.querySelectorAll('.step');

        stepsElements.forEach((stepEl, i) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stepEl,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                    // markers: true,
                }
            });

            tl.from(stepEl.querySelector('.step-image'), {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: 'power3.out',
            })
                .from(stepEl.querySelector('.step-id'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: 'power3.out',
                }, "-=0.5")
                .from(stepEl.querySelector('.step-title'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: 'power3.out',
                }, "-=0.4")
                .from(stepEl.querySelector('.step-desc'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: 'power3.out',
                }, "-=0.4");

            // Animate arrow if exists
            const arrow = stepEl.nextElementSibling?.querySelector('.arrow');
            if (arrow) {
                tl.from(arrow, {
                    opacity: 0,
                    x: 20,
                    duration: 0.5,
                    ease: 'power3.out',
                }, "-=1");
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
        <Container maxWidth={'xl'}>
            <Box
                ref={containerRef}
                sx={{ py: { xs: 6, md: 10 }, px: 2, textAlign: 'center' }}
            >
                <Typography variant="h5" sx={{ color: '#FF6600', fontWeight: 700, mb: 1 }}>
                    WORKING PROCESS
                </Typography>
                <Typography
                    variant={isMobile ? "h3" : "h1"}
                    sx={{
                        fontWeight: 800,
                        textAlign:"center",
                        mb: 3,
                        background: 'linear-gradient(45deg, #000000 30%, #FF6600 70%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 20px rgba(255, 102, 0, 0.2)',
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4rem' }
                    }}
                >
                    Exploration To Processing
                </Typography>
                <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        // gap: { xs: 3, md: 5 }
                    }}
                >
                    {steps.map((step, index) => {
                        const imageSize = index === 1 ? { xs: 240, md: 300 } : { xs: 200, md: 240 };

                        return (
                            <React.Fragment key={step.id}>
                                <Box
                                    className="step"
                                    sx={{ position: 'relative', textAlign: 'center', maxWidth: 300 }}
                                >
                                    <Box
                                        component="img"
                                        src={step.image}
                                        alt={step.title}
                                        className="step-image"
                                        sx={{
                                            width: imageSize,
                                            height: imageSize,
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            mx: 'auto',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }}
                                    />
                                    <Box
                                        className="step-id"
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 'calc(50% - 90px)',
                                            backgroundColor: '#FF6600',
                                            color: '#fff',
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {step.id}
                                    </Box>

                                    <Typography variant="h6" className="step-title" sx={{ fontWeight: 700, mt: 2 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" className="step-desc" sx={{ color: 'text.secondary', mt: 1, mb: 2 }}>
                                        {step.description}
                                    </Typography>
                                </Box>


                            </React.Fragment>
                        );
                    })}
                </Box>
            </Box>
        </Container>
        </>
    );
};

export default Workingprocess;
