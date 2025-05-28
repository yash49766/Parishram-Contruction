import React, { useRef, useEffect } from 'react';
import {Box, Container, Typography} from '@mui/material';
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

const ArrowRightSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
    >
        <path d="m22 6 8 10-8 10m8-10H2" />
    </svg>
);

const Workingprocess = () => {
    const containerRef = useRef(null);

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
                <Typography variant="h6" sx={{ color: '#FF6600', fontWeight: 700, mb: 1 }}>
                    WORKING PROCESS
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: { xs: 6, md: 8 } }}>
                    Exploration To Processing
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: { xs: 3, md: 5 }
                    }}
                >
                    {steps.map((step, index) => {
                        const imageSize = index === 1 ? { xs: 220, md: 280 } : { xs: 180, md: 220 };

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

                                {index < steps.length - 1 && (
                                    <Box className="arrow" sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }}>
                                        <ArrowRightSvg />
                                    </Box>
                                )}
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
