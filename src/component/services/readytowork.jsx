import React, { useRef, useEffect } from 'react';
import {Box, Typography, Button, Stack, Container} from '@mui/material';
import Img from '../../assets/services/office-buildings_1127-2022.avif';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Readytowork() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const animatedItemsRef = useRef([]);

    useEffect(() => {
        const elements = animatedItemsRef.current;
        gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !animatedItemsRef.current.includes(el)) {
            animatedItemsRef.current.push(el);
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: 320, md: 400 },
                backgroundImage: `url(${Img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                px: { xs: 3, md: 8 },
                py: { xs: 4, md: 0 },
            }}
        >
            {/* Overlay */}
            <Container maxWidth={'xl'}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(21,21,21,0.7)',
                        zIndex: 1,
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: { xs: '90%', md: 480 },
                        color: '#fff',
                        textAlign: { xs: 'center', md: 'left' },
                        width: '100%',
                    }}
                    ref={containerRef}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '22px', md: '40px' },
                            mb: 2,
                            lineHeight: 1.2,
                        }}
                    >
                        {['READY', 'TO', 'WORK', 'TOGETHER?'].map((word, i) => (
                            <span
                                key={i}
                                style={{ display: 'inline-block', marginRight: '8px' }}
                                ref={addToRefs}
                            >
                            {word}
                        </span>
                        ))}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '14px', md: '16px' },
                            mb: 4,
                            whiteSpace: 'normal',
                        }}
                    >
                        {'Whether you have a project in mind and you’re looking for a reliable construction partner or you’re looking to take the next step in your career, we want to hear from you!'.split(' ').map((word, i) => (
                            <span
                                key={i}
                                style={{ display: 'inline-block', marginRight: '5px' }}
                                ref={addToRefs}
                            >
                            {word}
                        </span>
                        ))}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'left' },
                        }}
                        ref={addToRefs}
                    >
                        <Stack direction="row" spacing={2} flexWrap="nowrap">
                            <Button
                                variant="contained"
                                onClick={() => navigate('/contact')}
                                sx={{
                                    backgroundColor: '#f58220',
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: { xs: '12px', md: '14px' },
                                    px: { xs: 2, md: 3 },
                                    py: { xs: 1, md: 1.5 },
                                    textTransform: 'uppercase',
                                    borderRadius: 0,
                                    '&:hover': { backgroundColor: '#d86d14' },
                                    minWidth: { xs: 100, md: 120 },
                                }}
                                endIcon={<span style={{ fontSize: { xs: '12px', md: '14px' } }}>↗</span>}
                                ref={addToRefs}
                            >
                                Get a Quote
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => navigate('/contact')}
                                sx={{
                                    borderColor: '#f58220',
                                    color: '#f58220',
                                    fontWeight: 600,
                                    fontSize: { xs: '12px', md: '14px' },
                                    px: { xs: 2, md: 3 },
                                    py: { xs: 1, md: 1.5 },
                                    textTransform: 'uppercase',
                                    borderRadius: 0,
                                    '&:hover': { borderColor: '#d86d14', color: '#d86d14' },
                                    minWidth: { xs: 100, md: 120 },
                                }}
                                endIcon={<span style={{ fontSize: { xs: '12px', md: '14px' } }}>↗</span>}
                                ref={addToRefs}
                            >
                                Career with Us
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Readytowork;
